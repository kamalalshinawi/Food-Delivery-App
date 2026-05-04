import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import ProfileLogo from '../../components/ProfileLogo';
import { s } from 'react-native-size-matters';
import { SharedPaddingHorizontal } from '../../styles/SharedStyle';
import DetailBanner from '../../components/DetailBanner';
import SmMail from '../../assets/icons/smMail';
import SmPhone from '../../assets/icons/smPhone';
import SmAdd from '../../assets/icons/smAdd';
import SmIcon from '../../assets/icons/smIcon';
import ButtonApp from '../../components/ButtonApp';
import { useNavigation } from '@react-navigation/native';

const DetailsProfile = [
  {
    id: '1',
    mainText: 'Full Name',
    subText: 'John Doe',
    Icon: <SmIcon />,
  },
  {
    id: '2',
    mainText: 'Email',
    subText: 'JohnDoe@gmail.com',
    Icon: <SmMail />,
  },
  {
    id: '3',
    mainText: 'Phone',
    subText: '01028149741',
    Icon: <SmPhone />,
  },
  {
    id: '4',
    mainText: 'Address',
    subText: '1 street John Doe,Cairo',
    Icon: <SmAdd />,
  },
];

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ProfileLogo />
      <View style={styles.detailContainer}>
        <FlatList
          data={DetailsProfile}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DetailBanner
              logoIcon={item.Icon}
              mainText={item.mainText}
              subText={item.subText}
            />
          )}
          contentContainerStyle={{ paddingVertical: s(20) }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: s(15) }} />}
        />
      </View>

      <ButtonApp
        title="Log Out"
        onPrees={() => {
          navigation.navigate('Auth' as never);
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SharedPaddingHorizontal,
  },
  detailContainer: {
    backgroundColor: '#ffff',
    width: '90%',
    alignSelf: 'center',
    height: s(350),
    marginTop: s(20),
    borderRadius: s(20),
    paddingHorizontal: SharedPaddingHorizontal,
  },
});
