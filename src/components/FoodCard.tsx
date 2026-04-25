import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import { SharedPaddingHorizontal } from '../styles/SharedStyle';
import { AppColor } from '../styles/colors';
import { Text } from 'react-native-gesture-handler';
import { AppFont } from '../styles/fonts';
import PlusIcon from '../assets/icons/PlusIcon';

interface FoodCardProps {
  imageSource: ImageSourcePropType;
  foodName: string;
  price: string;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - SharedPaddingHorizontal * 2 - s(14)) / 2; // Calculate card width based on screen width and padding

const FoodCard: FC<FoodCardProps> = ({ imageSource, foodName, price }) => {
  return (
    <View
      style={{
        paddingHorizontal: s(7),
        backgroundColor: AppColor.background,
      }}
    >
      <View style={styles.container}>
        <View>
          <Image source={imageSource} style={styles.imageStyle} />
        </View>
        <View>
          <Text style={styles.foodDetail}>{foodName}</Text>
          <Text style={styles.priceDetail}>From {price}</Text>
        </View>
        <TouchableOpacity style={styles.tableStyle}>
          <PlusIcon />
          <Text style={{ color: AppColor.iconBackGround }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: vs(180),
    backgroundColor: AppColor.cardColor,
    borderRadius: s(30),

    marginTop: vs(50),
  },
  imageStyle: {
    width: s(120),
    height: vs(120),
    marginTop: vs(-40),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  foodDetail: {
    color: AppColor.iconBackGround,
    fontSize: s(14),
    fontFamily: AppFont.Bold,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: vs(10),
  },
  priceDetail: {
    color: AppColor.countColor,
    fontSize: s(12),
    textAlign: 'center',
    marginTop: vs(5),
  },
  tableStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: s(4),
    marginTop: vs(10),
  },
});
