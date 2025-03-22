import { useEffect } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { RNContainer, RNStyles, RNText } from '../../Common';
import { usePermissions } from '../../Hooks';
import { Images, Strings } from '../../Constants';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../Theme';
import { CategoryItem, ProductCard, SearchBar } from '../../Components/Common';
import { NavRoutes } from '../../Navigation';
export default function Home({ navigation }) {
  const { requestPermissions } = usePermissions();

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <RNContainer topSafeArea={true}>
      <ScrollView>
        <SearchBar />
        <ViewMoreList
          title={Strings.Category}
          onPress={() => navigation.navigate(NavRoutes.Categories)}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CategoryItem image={item.image} name={item.name} />
          )}
          contentContainerStyle={{ marginHorizontal: wp(4) }}
        />
        <ViewMoreList
          title={Strings.Products}
          onPress={() => navigation.navigate(NavRoutes.Categories)}
        />
        <View style={styles.productsContainer}>
          {products.map((item, index) => (
            <ProductCard
              key={index}
              item={item}
              onPress={() => navigation.navigate(NavRoutes.ProductDetails)}
            />
          ))}
        </View>
      </ScrollView>
    </RNContainer>
  );
}

const ViewMoreList = ({ title, onPress }) => (
  <View style={styles.viewList}>
    <RNText style={styles.sectionTitle}>{title}</RNText>
    <TouchableOpacity style={styles.viewAll} onPress={onPress}>
      <RNText style={styles.viewText}>View All</RNText>
      <Image source={Images.rightArrow} style={styles.arrowIcon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  coinsContainer: {
    ...RNStyles.flexRowCenter,
  },

  viewList: {
    ...RNStyles.flexRowBetween,
    width: '90%',
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  viewAll: {
    ...RNStyles.flexRowBetween,
    backgroundColor: Colors.languageBg,
    borderRadius: wp(10),
    paddingLeft: wp(4),
    paddingRight: wp(2),
    paddingVertical: hp(1),
    alignItems: 'center',
  },
  viewText: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.SemiBold,
    marginTop: hp(0.5),
  },
  arrowIcon: {
    width: normalize(25),
    height: normalize(25),
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: FontSize.font25,
    fontFamily: FontFamily.SemiBold,
  },
  productsContainer: {
    ...RNStyles.flexRowBetween,
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginBottom: hp(4),
  },
});

const categories = [
  {
    id: '1',
    name: 'NPK Fertilizers',
    image: Images.npk12,
  },
  {
    id: '2',
    name: 'Vermi Compost',
    image: Images.npk12,
  },
  {
    id: '3',
    name: 'Soil Conditioners',
    image: Images.npk12,
  },
  {
    id: '4',
    name: 'Organic Fertilizers',
    image: Images.npk12,
  },
];

const products = [
  {
    id: '1',
    name: 'NPK Bio Fertilizer',
    price: 221,
    image: Images.npk12,
  },
  {
    id: '2',
    name: 'Root Strong VAM',
    price: 299,
    image: Images.npk12,
  },
  {
    id: '3',
    name: 'Roasted Bentonite',
    price: 375,
    image: Images.npk12,
  },
  {
    id: '4',
    name: 'Ammonium Sulphate',
    price: 480,
    image: Images.npk12,
  },
];
