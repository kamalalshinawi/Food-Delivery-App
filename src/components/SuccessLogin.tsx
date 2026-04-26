import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';

const SuccessLogin = (props: SheetProps<'LOGIN_SUCCESS'>) => {
  return (
    <ActionSheet id={props.sheetId}>
      <View style={styles.container}>
        <Text style={styles.title}>Login Successful</Text>
      </View>
    </ActionSheet>
  );
};

export default SuccessLogin;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
