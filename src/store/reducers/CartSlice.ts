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
    deleteFromCart: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );
      if (existingItem && existingItem.quantity != 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= action.payload.price;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    emptyCard: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, deleteFromCart, emptyCard } = cartSlice.actions;
export default cartSlice;
