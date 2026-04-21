import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';
import { AppColor } from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

const TopIcon = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <TouchableOpacity style={styles.container}>
      {count > 0 ? (
        <View style={styles.count}>
          <Text style={{ color: 'white' }}>{count}</Text>
        </View>
      ) : null}
      <Ionicons name="bag" size={s(20)} color={'white'} />
    </TouchableOpacity>
  );
};

export default TopIcon;

const styles = StyleSheet.create({
  container: {
    width: s(40),
    height: vs(40),
    borderRadius: s(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.iconBackGround,
  },
  count: {
    width: s(20),
    height: vs(20),
    borderRadius: s(20),
    backgroundColor: AppColor.countColor,
    position: 'absolute',
    top: -5,
    right: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
