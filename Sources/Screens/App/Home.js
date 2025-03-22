import { useEffect } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RNContainer, RNStyles, RNText } from '../../Common';
import { usePermissions } from '../../Hooks';
import { Images } from '../../Constants';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../Theme';
import { CategoryItem, ProductCard } from '../../Components/Common';

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity>
      <Image source={Images.user} style={styles.icon} />
    </TouchableOpacity>
    <View style={styles.coinsContainer}>
      <Image source={Images.money} style={styles.coinIcon} />
      <RNText style={styles.coinText}>0</RNText>
    </View>
    <TouchableOpacity>
      <Image source={Images.bell} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const SearchBar = () => (
  <View style={styles.searchBar}>
    <Image source={Images.search} style={styles.micIcon} />

    <TextInput
      placeholder="Search here..."
      placeholderTextColor={Colors.black + '50'}
      style={styles.searchInput}
    />
    <TouchableOpacity>
      <Image source={Images.mic} style={styles.micIcon} />
    </TouchableOpacity>
  </View>
);

const ViewMoreList = () => (
  <View style={styles.viewList}>
    <RNText style={styles.sectionTitle}>Category</RNText>
    <TouchableOpacity style={styles.viewAll}>
      <RNText style={styles.viewText}>View All</RNText>
      <Image source={Images.rightArrow} style={styles.arrowIcon} />
    </TouchableOpacity>
  </View>
);

export default function Home() {
  const { requestPermissions } = usePermissions();

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <RNContainer topSafeArea={true}>
      {/* <Header /> */}
      <ScrollView>
        <SearchBar />
        <ViewMoreList />

        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CategoryItem image={item.image} name={item.name} />
          )}
          contentContainerStyle={{ paddingHorizontal: wp(4) }}
        />

        <ViewMoreList />

        <View style={styles.productsContainer}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product?.image}
              price={product.price}
            />
          ))}
        </View>
      </ScrollView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  icon: { width: 30, height: 30 },
  coinsContainer: {
    ...RNStyles.flexRowCenter,
  },

  coinIcon: { width: 20, height: 20 },
  coinText: { marginLeft: 5 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(4),
    paddingHorizontal: wp(3),
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: normalize(50),
  },
  searchInput: {
    flex: 1,
    marginHorizontal: wp(2),
    color: Colors.black,
    fontFamily: FontFamily.Regular,
    fontSize: FontSize.font16,
    marginTop: hp(0.5),
  },
  micIcon: {
    width: normalize(30),
    height: normalize(30),
  },
  viewList: {
    width: '90%',
    ...RNStyles.flexRowBetween,
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
    width: '90%',
    ...RNStyles.flexRowBetween,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
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
    name: 'Roasted Bentonite Granules',
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
