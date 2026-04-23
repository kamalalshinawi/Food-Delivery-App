import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { SharedPaddingHorizontal } from '../styles/SharedStyle';
import { s, vs } from 'react-native-size-matters';
import { AppColor } from '../styles/colors';

interface ButtonAppProps {
  title: string;
}

const ButtonApp: FC<ButtonAppProps> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonApp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SharedPaddingHorizontal + s(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(50),
    marginTop: s(30),
    width: s(290),
    height: vs(38),
    alignSelf: 'center',
    backgroundColor: AppColor.Button,
  },
  text: {
    color: AppColor.background,
  },
});
