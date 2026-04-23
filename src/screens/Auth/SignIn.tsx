import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import InputText from '../../components/InputText';
import ButtonApp from '../../components/ButtonApp';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SignIn</Text>
      <Button
        title="Go to Sign Up "
        onPress={() => navigation.navigate('SignUp')}
      />

      <InputText title={'Full Name'} keyType='default' />
      <ButtonApp title='Sign-In' />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
