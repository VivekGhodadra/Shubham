import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../Constants';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../Theme';
import { useNavigation } from '@react-navigation/native';
import { RNStyles, RNText } from '../../Common';
import { ProductTabs } from '../../Components/Common';

const ProductDetails = () => {
  const navigation = useNavigation();
  const [Quantity, setQuantity] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../Assets/Images/ProductImage.png')}
        style={styles.bannerImage}>
        <View>
          <Image source={Images.rightArrow} style={styles.arrowIcon} />
        </View>
      </ImageBackground>
      <View style={{ flex: 1, backgroundColor: Colors.black }}>
        <View style={styles.detailsContainer}>
          <RNText
            size={FontSize.font30}
            family={FontFamily.SemiBold}
            align={'center'}
            pTop={hp(2)}>
            Ammonium Sulphate
          </RNText>
          <View
            style={{
              width: wp(70),
              paddingHorizontal: wp(4),
            }}>
            <View style={RNStyles.flexRow}>
              <RNText
                size={FontSize.font20}
                family={FontFamily.SemiBold}
                pTop={hp(1)}
                pLeft={wp(3)}>
                {'₹480'}
              </RNText>
              <View></View>
            </View>
            <View style={RNStyles.flexRow}>
              <RNText
                size={FontSize.font15}
                family={FontFamily.Regular}
                pTop={hp(1)}
                pLeft={wp(3)}>
                {'Quantity  :'}
              </RNText>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ width: wp(10) }}
                  onPress={() => setQuantity(Quantity - 1)}>
                  <RNText style={[styles.actionText]}>{'-'}</RNText>
                </TouchableOpacity>
                <View style={styles.devider} />
                <View style={{ width: wp(10) }}>
                  <RNText style={styles.quantityText}>{Quantity}</RNText>
                </View>
                <View
                  style={{
                    height: hp(4.5),
                    width: 1,
                    backgroundColor: Colors.black,
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ width: wp(10) }}
                  onPress={() => setQuantity(Quantity + 1)}>
                  <RNText style={[styles.actionText]}>{'+'}</RNText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ProductTabs />
          <ScrollView bounces={false}>
            <RNText
              pHorizontal={wp(4)}
              size={FontSize.font10}
              family={FontFamily.Regular}>
              {
                'Roasted Bentonite are used as a carrier formulation of Bio-fertilizers, Plants Growth Promoter etc. These granules are mostly used in fertilizers and Agriculture Industries Bentonite Granules are roasted at specific temperature in Furnace to increase it properties for better absorption of technicals and slowly release in soil for utilizing by roots It is highly absorbent and during formulation it does not stick to the wall of granulator. Bentonite Granules can be easily mix with seed before sowing. It has properties of hardness and high absorbent capacity. It has natural properties to absorb and release active ingredients slowly to grow the plant faster and better. It is an Ecofriendly product. We prepare these granules in various mesh sizes. We provide superior quality dust free granules, the quality of which is checked in our in-house laboratory.'
              }
            </RNText>
          </ScrollView>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.buyButton}>
              <RNText style={styles.buyText}>Add to Cart</RNText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buyButton}>
              <RNText style={styles.buyText}>Send Inquiry</RNText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 'auto',
    aspectRatio: 393 / 280,
    zIndex: 0,
    // position: 'absolute',
  },
  arrowIcon: {
    width: normalize(35),
    height: normalize(35),
    resizeMode: 'contain',
    tintColor: Colors.white,
    position: 'absolute',
    top: hp(5),
    left: wp(2),
    transform: [{ rotate: '180deg' }],
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: normalize(40),
    borderTopRightRadius: normalize(40),
  },
  quantityContainer: {
    ...RNStyles.flexRow,

    borderWidth: 1,
    marginLeft: wp(3),
    borderRadius: 12,
    height: hp(4.5),
  },
  quantityText: {
    fontFamily: FontFamily.Regular,
    fontSize: FontSize.font15,
    textAlign: 'center',
    marginTop: hp(0.5),
  },
  actionText: {
    fontFamily: FontFamily.Regular,
    fontSize: FontSize.font22,
    textAlign: 'center',
  },
  devider: {
    ...RNStyles.flexRow,
    borderWidth: 1,
    marginLeft: wp(3),
    borderRadius: 12,
    height: hp(4.5),
  },
  btnView: {
    ...RNStyles.flexRow,
    justifyContent: 'space-between',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    width: '80%',
    alignSelf: 'center',
  },
  buyButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: wp(4),
    borderRadius: wp(5),
  },
  buyText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: FontSize.font12,
    family: FontFamily.Medium,
    marginVertical: hp(1),
  },
});
