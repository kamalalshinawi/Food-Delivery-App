import {
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import FoodCard from '../../components/FoodCard';
import { foodData, FoodItem } from '../../constants/foodData';
import { AppColor } from '../../styles/colors';
import { s, vs } from 'react-native-size-matters';
import SearchBar from '../../components/SearchBar';
import HeaderApp from '../../components/HeaderApp';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/CartSlice';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const filterData = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) {
      return foodData;
    }
    return foodData.filter(item => item.foodName.toLowerCase().includes(query));
  }, [searchText]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <HeaderApp subTitle="Search" mainTitle="Food" />
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <FlatList
        data={filterData}
        keyExtractor={(item: FoodItem) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FoodCard
            imageSource={item.imageSource}
            foodName={item.foodName}
            price={item.price}
            handelAddToCart={() => dispatch(addToCart(item))}
          />
        )}
        contentContainerStyle={{
          paddingBottom: vs(120),
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
    paddingHorizontal: s(10),
  },
});
