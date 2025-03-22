import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RNContainer, RNHeader, RNStyles, RNText } from '../../Common';
import { SearchBar } from '../../Components/Common';
import { Images } from '../../Constants';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { FlatList } from 'react-native-gesture-handler';

export default function Categories() {
  return (
    <RNContainer bottomSafeArea={true}>
      <RNHeader title={'Settings'} containtContainerStyle={{ flex: 0 }} />
      <SearchBar />
      <FlatList
        data={product}
        keyExtractor={item => item.id}
        style={{ flex: 1 }}
        renderItem={item => (
          <View style={styles.listItems}>
            <Image source={Images.npk12} style={styles.image} />
            <RNText
              size={FontSize.font16}
              family={FontFamily.Medium}
              pTop={hp(1.5)}>
              {'NPK Fertilizer'}
            </RNText>
          </View>
        )}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  listItems: {
    width: wp(40),
    height: hp(25),
    backgroundColor: Colors.white,
    borderRadius: wp(5),
    alignItems: 'center',
    paddingVertical: hp(2),
    shadowColor: Colors.black,
    ...RNStyles.shadow,
    marginHorizontal: wp(4),
    marginBottom: hp(3),
    elevation: 10,
  },
  image: {
    ...RNStyles.image70,
    resizeMode: 'contain',
  },
  contentContainer: {
    alignSelf: 'center',
    paddingBottom: hp(4),
    paddingTop: hp(2),
  },
});

const product = [
  {
    id: 1,
    title: 'NPK Fertilizer',
    image: Images.npk12,
  },
  {
    id: 2,
    title: 'Vermi Compost',
    image: Images.npk12,
  },
  {
    id: 3,
    title: 'Organic Fertilizers',
    image: Images.npk12,
  },
  {
    id: 4,
    title: 'Mix Micronutrient',
    image: Images.npk12,
  },
  {
    id: 5,
    title: 'Water Soluble',
    image: Images.npk12,
  },
  {
    id: 6,
    title: 'Soil Conditioners',
    image: Images.npk12,
  },

  {
    id: 7,
    title: 'Soil Conditioners',
    image: Images.npk12,
  },
];
