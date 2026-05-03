import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { vs } from 'react-native-size-matters';
import React from 'react';
import CheckoutCard from '../../components/CheckoutCard';
import { SharedPaddingHorizontal } from '../../styles/SharedStyle';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import {
  addToCart,
  deleteFromCart,
  emptyCard,
} from '../../store/reducers/CartSlice';
import HeaderApp from '../../components/HeaderApp';
import PaymentCheckOut from '../../components/PaymentCheckOut';
import { DeliveryFee } from '../../constants/constant';
import ButtonApp from '../../components/ButtonApp';

const cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const TotalPrices = items.reduce((total, item) => total + item.totalPrice, 0);
  const TotalVec = TotalPrices + Number(DeliveryFee);
  return (
    <View style={styles.container}>
      <View>
        <HeaderApp subTitle="Your" mainTitle="Cart" />
      </View>
      <View style={styles.listWrapper}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CheckoutCard
              image={item.imageSource}
              title={item.foodName}
              price={`$${item.totalPrice.toFixed(2)}`}
              count={item.quantity}
              handelIncreaseItem={() => {
                dispatch(addToCart(item));
              }}
              handelDecreaseItem={() => {
                dispatch(deleteFromCart(item));
              }}
              deleteCard={() => {
                dispatch(emptyCard(item));
              }}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <PaymentCheckOut
        TotalVec={TotalVec.toFixed(2)}
        TotalPrices={TotalPrices.toFixed(2)}
        DeliveryFee={Number(DeliveryFee)}
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <ButtonApp title="Confirm" />
      </TouchableOpacity>
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SharedPaddingHorizontal,
  },
  listWrapper: {
    flex: 1,
  },
  listContent: {
    paddingBottom: vs(360),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
