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
import { signInSchema } from '../../utils/validationSchemas';

type SignInErrors = {
  email?: string;
  password?: string;
};

const SignIn = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<SignInErrors>({});

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

  const handelSignIn = async () => {
    try {
      await signInSchema.validate(
        { email, password },
        { abortEarly: false },
      );
      setErrors({});
      SheetManager.show('LOGIN_SUCCESS');
    } catch (err) {
      if (err instanceof ValidationError) {
        const fieldErrors: SignInErrors = {};
        err.inner.forEach(e => {
          if (e.path && !fieldErrors[e.path as keyof SignInErrors]) {
            fieldErrors[e.path as keyof SignInErrors] = e.message;
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
          source={require('../../assets/images/loginBanner.png')}
        />
        <View style={styles.logo}>{!isKeyboardVisible && <LoginIcon />}</View>
      </View>
      <View style={styles.formContainer}>
        <InputText
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
          style={styles.passInput}
          value={password}
          onChangeText={setPassword}
          error={errors.password}
        />
        <ButtonApp title="Sign In" onPrees={() => handelSignIn()} />
      </View>
      {!isKeyboardVisible && (
        <View style={styles.textStyle}>
          <Text style={styles.mainText}>Don’t have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('SignUp' as never);
            }}
          >
            <Text
              style={{
                color: AppColor.secondary,
              }}
            >
              Sign up
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
    paddingTop: vs(60),
  },
  passInput: {
    marginTop: vs(15),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    position: 'absolute',
    bottom: vs(145),
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
