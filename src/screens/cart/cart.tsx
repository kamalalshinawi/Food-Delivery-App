import { StyleSheet, FlatList, View } from 'react-native';
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

const cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CheckoutCard
            image={item.imageSource}
            title={item.foodName}
            price={item.price}
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
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SharedPaddingHorizontal,
  },
});
