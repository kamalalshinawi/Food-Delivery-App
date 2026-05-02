import { createSlice } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';

interface CartItem {
  id: string;
  foodName: string;
  price: string;
  quantity: number;
  totalPrice: number;
  imageSource: ImageSourcePropType;
}

interface StateItem {
  items: CartItem[];
}

const initialState: StateItem = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice;
