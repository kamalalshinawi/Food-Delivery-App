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

const SignIn = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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
        <InputText title="Full Name" keyType="default" />
        <InputText
          style={styles.emailInput}
          title="Email"
          keyType="email-address"
        />
        <InputText title="Password" keyType="default" secureTextEntry />
        <ButtonApp
          title="Sign In"
          onPrees={() => SheetManager.show('LOGIN_SUCCESS')}
        />
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
