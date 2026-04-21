import {
  FlatList,
  ImageSourcePropType,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import { vs } from 'react-native-size-matters';
import { AppColor } from '../styles/colors';
import { SharedPaddingHorizontal } from '../styles/SharedStyle';
import HeaderApp from '../components/HeaderApp';
import BannerView from '../components/BannerView';

type BannerItem = {
  id: string;
  title: string;
  price: string;
  image: ImageSourcePropType;
  backgroundColor: string;
};

const banners: BannerItem[] = [
  {
    id: 'summer-combo',
    title: 'SUMMER\nCOMBO',
    price: '$10.88',
    image: require('../assets/images/banner1.png'),
    backgroundColor: '#E04403',
  },
  {
    id: 'cheese-deal',
    title: 'CHEESE\nDEAL',
    price: '$12.40',
    image: require('../assets/images/banner1.png'),
    backgroundColor: '#FF7622',
  },
  {
    id: 'burger-night',
    title: 'BURGER\nNIGHT',
    price: '$9.60',
    image: require('../assets/images/banner1.png'),
    backgroundColor: '#D9561A',
  },
];

const HomeScreen = () => {
  const renderBannerItem: ListRenderItem<BannerItem> = ({ item }) => {
    return (
      <BannerView
        title={item.title}
        price={item.price}
        image={item.image}
        backgroundColor={item.backgroundColor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HeaderApp />
      <View style={styles.bannerListWrapper}>
        <FlatList
          data={banners}
          keyExtractor={item => item.id}
          renderItem={renderBannerItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
    paddingHorizontal: SharedPaddingHorizontal,
  },
  bannerListWrapper: {
    marginTop: vs(16),
  },
  listContent: {
    paddingBottom: vs(80),
    gap: vs(4),
  },
  separator: {
    height: vs(12),
  },
});
