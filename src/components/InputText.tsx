import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
} from 'react-native';
import React, { FC, useState } from 'react';
import { SharedPaddingHorizontal } from '../styles/SharedStyle';
import { vs } from 'react-native-size-matters';
import { AppColor } from '../styles/colors';

interface inputTextProps {
  title: string;
  keyType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  style?: StyleProp<TextStyle>;
}

const InputText: FC<inputTextProps> = ({
  style,
  title,
  keyType,
  secureTextEntry,
}) => {
  const [text, setText] = useState('');
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textTitle}>{title}</Text>
      <View>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          keyboardType={keyType}
          secureTextEntry={secureTextEntry}
        />
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
    paddingVertical: vs(2),
    marginTop: vs(1.5),
    color: 'black',
  },
});
