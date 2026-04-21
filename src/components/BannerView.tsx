import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const BannerView = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={require('../assets/images/banner1.png')}
        style={styles.ImageBanner}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BannerView;

const styles = StyleSheet.create({
  container: {
    height: vs(200),
    width: s(330),
    borderRadius: s(20),
    backgroundColor: 'red',
    marginVertical: vs(20),
    alignSelf: 'center',
    overflow: 'hidden',
  },
  ImageBanner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
