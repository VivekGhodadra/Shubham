import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../Theme';
import { RNText } from '../../Common';

const ProductCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.productCard} onPress={onPress}>
      <RNText
        size={FontSize.font12}
        family={FontFamily.Medium}
        pBottom={hp(2)}
        align={'center'}>
        {item.name}
      </RNText>
      <Image source={item.image} style={styles.productImage} />

      <View style={styles.priceView}>
        <RNText
          size={FontSize.font12}
          pTop={hp(0.5)}
          family={FontFamily.SemiBold}>
          ₹{item.price}
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
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1),
    paddingHorizontal: wp(2),
  },
  buyButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: wp(4),
    borderRadius: wp(5),
    paddingVertical: hp(0.3),
  },
  buyText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: FontSize.font12,
    family: FontFamily.Medium,
  },
});
