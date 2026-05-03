import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import { AppColor } from '../styles/colors';
import DecreaseIcon from '../assets/icons/DecreaseIcon';
import IncreaseIcon from '../assets/icons/IncreaseIcon';
import DeleteIcon from '../assets/icons/DeleteIcon';

interface CheckoutCardProps {
  image: ImageSourcePropType;
  title: string;
  price: string;
  count: number;
  handelIncreaseItem: () => void;
  handelDecreaseItem: () => void;
  deleteCard: () => void;
}

const CheckoutCard: FC<CheckoutCardProps> = ({
  image,
  title,
  price,
  count,
  handelIncreaseItem,
  handelDecreaseItem,
  deleteCard,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.mainBottom}>
          <TouchableOpacity onPress={handelDecreaseItem}>
            <DecreaseIcon />
          </TouchableOpacity>
          <Text style={styles.count}>{count}</Text>
          <TouchableOpacity onPress={handelIncreaseItem}>
            <IncreaseIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.deleteIconContainer}
          onPress={deleteCard}
        >
          <DeleteIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  container: {
    width: s(315),
    height: vs(100),
    backgroundColor: AppColor.cardColor,
    borderRadius: s(20),
    marginBottom: vs(-5),
    marginTop: vs(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
  },
  imageContainer: {
    width: s(95),
    height: vs(90),
    borderRadius: s(20),
    backgroundColor: AppColor.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: s(80),
    height: vs(80),
    borderRadius: s(10),
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    marginLeft: s(20),
  },
  title: {
    fontSize: s(16),
    fontWeight: 'bold',
    color: '#181C2E',
    marginTop: vs(-40),
  },
  price: {
    fontSize: s(14),
    color: AppColor.secondary,
    marginTop: vs(5),
  },
  bottomContainer: {
    position: 'absolute',
    bottom: vs(10),
    right: s(81),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: s(25),
  },
  count: {
    fontSize: s(14),
    color: '#181C2E',
  },

  deleteIconContainer: {
    position: 'absolute',
    right: s(-100),
  },
  mainBottom: {
    marginRight: s(-10),
    paddingRight: s(10),
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
