import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AppColor } from '../styles/colors';
import TopIcon from '../components/TopIcon';
import { SharedPaddingHorizontal } from '../styles/SharedStyle';
import { s, vs } from 'react-native-size-matters';
import { AppFont } from '../styles/fonts';
import BottomIcon from '../assets/icons/BottomIcon';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headStyle}>
        <View>
          <Text style={styles.secText}>Deliver to</Text>
          <TouchableOpacity style={styles.puMainText}>
            <Text style={styles.mainText}>Rijeka, Croatia</Text>
            <BottomIcon style={{ marginTop: vs(5) }} />
          </TouchableOpacity>
        </View>
        <TopIcon />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  headStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SharedPaddingHorizontal,
    paddingVertical: 10,
  },
  secText: {
    color: AppColor.secondary,
    fontSize: s(12),
    fontFamily: AppFont.Bold,
  },
  mainText: {
    color: AppColor.textPrimary,
    fontSize: s(16),
    fontFamily: AppFont.Bold,
    paddingRight: s(4),
  },
  puMainText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
