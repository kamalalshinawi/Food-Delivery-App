import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import BenEdit from '../assets/icons/BenEdit';

const ProfileLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainLogoContainer}>
        <Image
          source={require('../assets/images/profileImage.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.editLogo}>
          <BenEdit />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileLogo;

const styles = StyleSheet.create({
  container: {
    width:"100%",
    marginTop: vs(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLogoContainer: {
    width: s(110),
    height: s(110),
    borderRadius: s(50),
  },
  logo: {
    width: '100%',
    height: '100%',

    borderRadius: 100,
  },
  editLogo: {
    width: s(25),
    height: s(25),
    borderRadius: s(12.5),
    backgroundColor: '#FE8C00',
    position: 'absolute',
    right: 0,
    bottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
