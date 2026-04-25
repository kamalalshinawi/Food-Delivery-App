import { ImageSourcePropType } from 'react-native';

export interface FoodItem {
  id: string;
  foodName: string;
  price: string;
  imageSource: ImageSourcePropType;
}

export const foodData: FoodItem[] = [
  {
    id: '1',
    foodName: 'Chicken Pizza',
    price: '$12.99',
    imageSource: require('../assets/images/chickePizza.png'),
  },
  {
    id: '2',
    foodName: 'Hamburger',
    price: '$8.49',
    imageSource: require('../assets/images/hamburger.png'),
  },
  {
    id: '3',
    foodName: 'Pizza',
    price: '$10.99',
    imageSource: require('../assets/images/pizza.png'),
  },
  {
    id: '4',
    foodName: 'Beef Burger',
    price: '$9.25',
    imageSource: require('../assets/images/image1.png'),
  },
  {
    id: '5',
    foodName: 'Cheese Pizza',
    price: '$11.50',
    imageSource: require('../assets/images/image2.png'),
  },
  {
    id: '6',
    foodName: 'Veggie Delight',
    price: '$7.99',
    imageSource: require('../assets/images/image3.png'),
  },
];
