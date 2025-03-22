import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../Theme';
import { Images } from '../../Constants';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Image source={Images.search} style={styles.icon} />

      <TextInput
        placeholder="Search here..."
        placeholderTextColor={Colors.black + '50'}
        style={styles.searchInput}
      />
      <TouchableOpacity>
        <Image source={Images.mic} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  icon: {
    width: normalize(30),
    height: normalize(30),
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(4),
    paddingHorizontal: wp(3),
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: normalize(50),
    marginBottom: hp(2),
  },
  searchInput: {
    flex: 1,
    marginHorizontal: wp(2),
    color: Colors.black,
    fontFamily: FontFamily.Regular,
    fontSize: FontSize.font16,
    marginTop: hp(0.5),
    paddingVertical: hp(1),
  },
});
