import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNImage,
  RNScrollView,
  RNStyles,
  RNText,
} from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { SHInput } from '../../Components';

export default function Login() {
  return (
    <RNContainer topSafeArea style={RNStyles.container}>
      <RNScrollView>
        <RNText
          size={FontSize.font25}
          pVertical={hp(2)}
          pLeft={wp(6)}
          family={FontFamily.SemiBold}>
          {'Log In'}
        </RNText>

        <RNImage source={Images.login} style={styles.image} />
        <SHInput placeholder={'Enter User Name'} leftIcon={Images.user} />
        <SHInput
          placeholder={'Password'}
          leftIcon={Images.password}
          rightIcon={Images.hide}
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <RNText family={FontFamily.SemiBold} size={FontSize.font15}>
            {'Forgot Password'}
          </RNText>
        </TouchableOpacity>

        <RNButton title={'Log In'} />

        <View style={styles.dontHave}>
          <RNText>{"Don't have an account? "}</RNText>
          <TouchableOpacity>
            <RNText
              family={FontFamily.SemiBold}
              size={FontSize.font15}
              color={Colors.primary}>
              {'Sign Up'}
            </RNText>
          </TouchableOpacity>
        </View>

        <View style={styles.deviders}>
          <View style={styles.devider} />
          <RNText size={FontSize.font12}>{' OR '}</RNText>
          <View style={styles.devider} />
        </View>

        <TouchableOpacity activeOpacity={0.6} style={styles.list}>
          <RNImage source={Images.user} style={styles.icon} />
          <RNText style={styles.signin}>{'Sign In as Guest'}</RNText>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.list}>
          <RNImage source={Images.google} style={styles.icon} />
          <RNText style={styles.signin}>{'Sign In with Google'}</RNText>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.list}>
          <RNImage source={Images.facebook} style={styles.icon} />
          <RNText style={styles.signin}>{'Sign In with Facebook'}</RNText>
        </TouchableOpacity>
      </RNScrollView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: wp(90),
    height: wp(80),
    alignSelf: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: wp(6),
    marginBottom: hp(4),
  },
  dontHave: {
    ...RNStyles.flexRow,
    paddingVertical: hp(1),
    alignSelf: 'center',
  },
  deviders: {
    ...RNStyles.flexRow,
    marginHorizontal: wp(4),
    paddingVertical: hp(3),
  },
  devider: {
    height: wp(0.3),
    backgroundColor: Colors.black,
    flex: 1,
  },
  list: {
    ...RNStyles.flexRow,
    ...RNStyles.shadow,
    backgroundColor: Colors.white,
    marginHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderRadius: wp(5),
    marginBottom: hp(2),
    borderWidth: wp(0.3),
    borderColor: Colors.black,
  },
  icon: {
    width: wp(8),
    height: wp(8),
    marginLeft: wp(10),
  },
  signin: {
    flex: 1,
    textAlign: 'center',
    paddingRight: wp(10),
  },
});
