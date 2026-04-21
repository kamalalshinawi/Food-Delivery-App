import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { AppFont } from '../styles/fonts';
import { AppColor } from '../styles/colors';

type BannerViewProps = {
  title: string;
  price: string;
  image: ImageSourcePropType;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const BannerView = ({
  title,
  price,
  image,
  backgroundColor = AppColor.countColor,
  style,
  onPress,
}: BannerViewProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, { backgroundColor }, style]}
    >
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Image source={image} style={styles.bannerImage} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default BannerView;

const styles = StyleSheet.create({
  container: {
    height: vs(160),
    width: s(311),
    borderRadius: s(20),
    alignSelf: 'center',
    overflow: 'hidden',
  },
  textWrapper: {
    position: 'absolute',
    left: s(20),
    top: vs(20),
    bottom: vs(18),
    justifyContent: 'space-between',
    zIndex: 2,
  },
  title: {
    fontSize: s(30),
    lineHeight: vs(33),
    fontFamily: AppFont.Bold,
    color: 'white',
  },
  price: {
    fontSize: s(22),
    lineHeight: vs(26),
    color: 'white',
    fontFamily: AppFont.Bold,
  },
  bannerImage: {
    position: 'absolute',
    right: s(-16),
    bottom: vs(-3),
    width: s(260),
    height: vs(156),
  },
});
