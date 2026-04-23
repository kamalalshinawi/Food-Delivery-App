import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { FC, use, useState } from 'react';
import { SharedPaddingHorizontal } from '../styles/SharedStyle';
import { vs } from 'react-native-size-matters';
import { AppColor } from '../styles/colors';

interface inputTextProps {
  title: string;
}

const InputText: FC<inputTextProps> = ({ title }) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <View>
        <TextInput value={text} onChangeText={setText} style={styles.input} />
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SharedPaddingHorizontal,
  },

  textTitle: {
    fontSize: vs(13),
    fontFamily: 'Rubik-Medium',
    color: AppColor.textSecondary,
    paddingHorizontal: vs(8),
  },
  input: {
    borderBottomWidth: 1,
    borderColor: AppColor.border,
    borderRadius: vs(8),
    paddingHorizontal: vs(8),
    paddingVertical: vs(1),
    marginTop: vs(1.5),
  },
});
