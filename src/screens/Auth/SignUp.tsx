import {
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import InputText from '../../components/InputText';
import ButtonApp from '../../components/ButtonApp';
import LoginIcon from '../../assets/icons/loginIcon';
import { s, vs } from 'react-native-size-matters';
import { AppColor } from '../../styles/colors';
import { SheetManager } from 'react-native-actions-sheet';
import { ValidationError } from 'yup';
import { signUpSchema } from '../../utils/validationSchemas';

type SignUpErrors = {
  fullName?: string;
  email?: string;
  password?: string;
};

const SignIn = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<SignUpErrors>({});

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSignUp = async () => {
    try {
      await signUpSchema.validate(
        { fullName, email, password },
        { abortEarly: false },
      );
      setErrors({});
      SheetManager.show('LOGIN_SUCCESS');
    } catch (err) {
      if (err instanceof ValidationError) {
        const fieldErrors: SignUpErrors = {};
        err.inner.forEach(e => {
          if (e.path && !fieldErrors[e.path as keyof SignUpErrors]) {
            fieldErrors[e.path as keyof SignUpErrors] = e.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBanner}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('../../assets/images/SignUpBanner.png')}
        />
        <View style={styles.logo}>{!isKeyboardVisible && <LoginIcon />}</View>
      </View>
      <View style={styles.formContainer}>
        <InputText
          title="Full Name"
          keyType="default"
          value={fullName}
          onChangeText={setFullName}
          error={errors.fullName}
        />
        <InputText
          style={styles.emailInput}
          title="Email"
          keyType="email-address"
          value={email}
          onChangeText={setEmail}
          error={errors.email}
        />
        <InputText
          title="Password"
          keyType="default"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          error={errors.password}
        />
        <ButtonApp title="Sign Up" onPrees={handleSignUp} />
      </View>
      {!isKeyboardVisible && (
        <View style={styles.textStyle}>
          <Text style={styles.mainText}>Already have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('SignIn' as never);
            }}
          >
            <Text
              style={{
                color: AppColor.secondary,
              }}
            >
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBanner: {
    flex: 0.5,
  },
  logo: {
    position: 'absolute',
    top: 85,
    left: 57,
    zIndex: 1,
  },
  formContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: '37.9%',
    borderTopLeftRadius: s(30),
    borderTopRightRadius: s(30),
    backgroundColor: AppColor.background,
    paddingTop: vs(50),
  },
  emailInput: {
    marginVertical: vs(15),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    position: 'absolute',
    bottom: vs(110),
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vs(15),
    flexDirection: 'row',
  },
  mainText: {
    fontSize: vs(12),
    color: AppColor.textPrimary,
  },
});
