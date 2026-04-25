import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import FoodCard from '../../components/FoodCard';
import { foodData, FoodItem } from '../../constants/foodData';
import { AppColor } from '../../styles/colors';
import { vs } from 'react-native-size-matters';
import SearchBar from '../../components/SearchBar';

const Search = () => {
  const [searchText, setSearchText] = useState('');



  return (
    <View style={styles.container}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <FlatList
        data={foodData}
        keyExtractor={(item: FoodItem) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FoodCard
            imageSource={item.imageSource}
            foodName={item.foodName}
            price={item.price}
          />
        )}
        contentContainerStyle={{
          paddingBottom: vs(120),
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
});
