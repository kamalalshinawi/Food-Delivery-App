import { StyleSheet, Text, View } from 'react-native';
import React, { FC, JSX } from 'react';
import { s, vs } from 'react-native-size-matters';

interface DetailBannerProps {
  logoIcon: JSX.Element;
  mainText: string;
  subText: string;
}

const DetailBanner: FC<DetailBannerProps> = ({
  logoIcon,
  mainText,
  subText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{logoIcon}</View>
      <View style={{ marginLeft: s(10), gap: vs(4) }}>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
    </View>
  );
};

export default DetailBanner;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: vs(15),
    flexDirection: 'row',
  },
  icon: {
    width: s(45),
    height: vs(45),
    backgroundColor: '#FE8C000D',
    borderRadius: s(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: s(12),

    color: '#6A6A6A',
  },
  subText: {
    fontSize: s(16),
    color: '#181C2E',
  },
});
