import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../Theme';
import { RNText } from '../../Common';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ name, price, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails')}
      style={styles.productCard}>
      <RNText
        size={FontSize.font12}
        family={FontFamily.Medium}
        pBottom={hp(2)}
        align={'center'}>
        {name}
      </RNText>
      <Image source={image} style={styles.productImage} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: hp(1),
          paddingHorizontal: wp(1),
        }}>
        <RNText
          size={FontSize.font12}
          pTop={hp(0.5)}
          family={FontFamily.SemiBold}>
          ₹{price}
        </RNText>
        <TouchableOpacity style={styles.buyButton}>
          <RNText style={styles.buyText}>Buy Now</RNText>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productImage: {
    width: '60%',
    height: 'auto',
    aspectRatio: 1 / 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: hp(1),
  },

  productCard: {
    backgroundColor: Colors.languageBg,
    width: wp(42),
    marginBottom: hp(4),
    padding: wp(3),
    borderRadius: normalize(20),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: normalize(15),
    elevation: 8,
  },
  buyButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: wp(2),
    borderRadius: wp(5),
  },
  buyText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: FontSize.font12,
    family: FontFamily.Medium,
  },
});
