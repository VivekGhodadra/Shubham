import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNStyles, RNText } from '../../Common';

const CategoryItem = ({ image, name }) => {
  return (
    <View style={styles.categoryList}>
      <View style={styles.categoryView}>
        <Image source={image} style={styles.categoryImage} />
      </View>
      <RNText numOfLines={2} style={styles.categoriName}>
        {name}
      </RNText>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryList: {
    alignItems: 'center',
    width: wp(25),
    marginBottom: hp(2),
  },
  categoryView: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(18),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    padding: wp(1),
    borderColor: Colors.primary,
  },
  categoryImage: {
    ...RNStyles.image100,
    borderRadius: wp(15),
    resizeMode: 'stretch',
  },
  categoriName: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Regular,
    marginTop: hp(0.5),
    width: '90%',
    textAlign: 'center',
  },
});
