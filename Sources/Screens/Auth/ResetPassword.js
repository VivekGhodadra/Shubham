import { StyleSheet, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNImage,
  RNScrollView,
  RNStyles,
  RNText,
} from '../../Common';
import { NavRoutes } from '../../Navigation';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { SHInput } from '../../Components';

export default function ResetPassword({ navigation }) {
  return (
    <RNContainer topSafeArea style={RNStyles.container}>
      <RNScrollView>
        <RNText
          size={FontSize.font25}
          pVertical={hp(2)}
          pLeft={wp(6)}
          family={FontFamily.SemiBold}>
          {'Reset Password'}
        </RNText>

        <RNImage source={Images.resetPassword} style={styles.image} />

        <SHInput
          placeholder={'New Password'}
          leftIcon={Images.lock}
          rightIcon={Images.hide}
        />

        <SHInput
          placeholder={'Confirm Password'}
          leftIcon={Images.lock}
          rightIcon={Images.hide}
        />

        <View style={styles.lists}>
          <View style={styles.list}>
            <RNImage source={Images.tick} style={styles.icon} />
            <RNText>{'At Least 8 characters'}</RNText>
          </View>
          <View style={styles.list}>
            <RNImage source={Images.untick} style={styles.icon} />
            <RNText>{'Contains a number'}</RNText>
          </View>
          <View style={styles.list}>
            <RNImage source={Images.untick} style={styles.icon} />
            <RNText>{'Contains a special character'}</RNText>
          </View>
        </View>

        <RNButton
          title={'Done'}
          onPress={() => navigation.navigate(NavRoutes.ResetPassword)}
        />
      </RNScrollView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: wp(70),
    height: wp(70),
    alignSelf: 'center',
  },
  lists: {
    paddingVertical: hp(2),
  },
  list: {
    ...RNStyles.flexRow,
    paddingHorizontal: wp(6),
    paddingVertical: hp(0.5),
  },
  icon: {
    width: wp(7),
    height: wp(7),
    marginRight: wp(3),
  },
});
