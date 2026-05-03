import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';

interface PaymentCheckOutProps {
  TotalPrices: number | string;
  DeliveryFee: number;
  TotalVec: number | string;
}
const PaymentCheckOut: FC<PaymentCheckOutProps> = ({
  TotalPrices,
  DeliveryFee,
  TotalVec,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.blockContainer}>
          <Text style={styles.text}>Total Price:</Text>
          <Text style={styles.number}>$ {TotalPrices}</Text>
        </View>
        <View style={styles.blockContainer}>
          <Text style={styles.text}>Delivery Fee:</Text>
          <Text style={styles.number}>$ {DeliveryFee}</Text>
        </View>
        <View style={styles.blockContainer}>
          <Text style={styles.text}>Total Amount:</Text>
          <Text style={styles.number}>$ {TotalVec}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentCheckOut;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    height: vs(210),
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#d9e1f1',
  },
  mainContainer: {
    flex: 1,
    // backgroundColor:'red',
    margin: 5,
    borderRadius: 20,
    // flexDirection:"row",
    // justifyContent:"space-between",
    // alignItems:"center",
    paddingHorizontal: 20,
  },
  blockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(20),
  },
  text: {
    fontSize: s(16),
    fontWeight: 'bold',
  },
  number: {
    fontSize: s(16),
    fontWeight: 'bold',
  },
});
