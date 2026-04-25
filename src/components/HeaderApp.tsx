import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import { AppFont } from '../styles/fonts';
import BottomIcon from '../assets/icons/BottomIcon';
import TopIcon from '../components/TopIcon';
import { AppColor } from '../styles/colors';

interface HeaderAppProps {
  subTitle: string;
  mainTitle: string;
}

const HeaderApp: FC<HeaderAppProps> = ({ subTitle, mainTitle }) => {
  return (
    <View style={styles.headStyle}>
      <View>
        <Text style={styles.secText}>{subTitle}</Text>
        <TouchableOpacity style={styles.puMainText}>
          <Text style={styles.mainText}>{mainTitle}</Text>
          <BottomIcon style={{ marginTop: vs(5) }} />
        </TouchableOpacity>
      </View>
      <TopIcon />
    </View>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
  headStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
