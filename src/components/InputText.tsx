import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
} from 'react-native';
import React, { FC } from 'react';
import { SharedPaddingHorizontal } from '../styles/SharedStyle';
import { vs } from 'react-native-size-matters';
import { AppColor } from '../styles/colors';

interface inputTextProps {
  title: string;
  keyType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  style?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
}

const InputText: FC<inputTextProps> = ({
  style,
  title,
  keyType,
  secureTextEntry,
  value,
  onChangeText,
  error,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textTitle}>{title}</Text>
      <View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, !!error && styles.inputError]}
          keyboardType={keyType}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          {...props}
        />
      </View>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
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
  inputError: {
    borderColor: '#E53935',
  },
  errorText: {
    color: '#E53935',
    fontSize: vs(11),
    paddingHorizontal: vs(8),
    marginTop: vs(2),
  },
});
