import { StyleSheet,View } from 'react-native';
import React from 'react';
import { AppColor } from '../styles/colors';
import { SharedPaddingHorizontal } from '../styles/SharedStyle';
import HeaderApp from '../components/HeaderApp';
import BannerView from '../components/BannerView';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderApp />
      <BannerView />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
    paddingHorizontal: SharedPaddingHorizontal,
  },
});
