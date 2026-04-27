import React, { useRef } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { s, vs } from 'react-native-size-matters';
import ButtonApp from '../components/ButtonApp';

const LoginSuccessSheet = (props: SheetProps<'LOGIN_SUCCESS'>) => {
  const navigation = useNavigation();
  const animationRef = useRef<LottieView>(null);

  return (
    <ActionSheet
      id={props.sheetId}
      onBeforeShow={() => animationRef.current?.reset()}
      onOpen={() => animationRef.current?.play()}
    >
      <View style={styles.container}>
        <LottieView
          ref={animationRef}
          autoPlay
          loop
          resizeMode="contain"
          style={styles.animation}
          source={require('../assets/success.json')}
        />

        <Text style={styles.title}>Login Successful</Text>

        <ButtonApp
          title="Go to Home Page"
          onPrees={async () => {
            await SheetManager.hide('LOGIN_SUCCESS');
            navigation.navigate('MainApp' as never);
          }}
        />
      </View>
    </ActionSheet>
  );
};

export default LoginSuccessSheet;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: s(250),
    height: vs(150),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: vs(12),
  },
});
