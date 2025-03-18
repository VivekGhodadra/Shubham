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
import { OtpInput } from 'react-native-otp-entry';
import { useTimer } from '../../Hooks';
import { NavRoutes } from '../../Navigation';

export default function ForgotPassword({ navigation }) {
  const time = useTimer(60);

  return (
    <RNContainer topSafeArea style={RNStyles.container}>
      <RNScrollView>
        <RNText
          size={FontSize.font25}
          pVertical={hp(2)}
          pLeft={wp(6)}
          family={FontFamily.SemiBold}>
          {'Forgot Password'}
        </RNText>

        <RNImage source={Images.forgotPassword} style={styles.image} />

        <View
          style={[
            RNStyles.flexRow,
            { alignSelf: 'center', paddingVertical: hp(1) },
          ]}>
          <RNText>{'Enter OTP send to your '}</RNText>
          <TouchableOpacity>
            <RNText color={Colors.primary}>{'Phone Number '}</RNText>
          </TouchableOpacity>
        </View>

        <SHInput
          placeholder={'Mobile Number'}
          maxLength={10}
          keyboardType={'numeric'}
        />

        <OtpInput
          numberOfDigits={4}
          focusColor={Colors.primary}
          disabled={false}
          autoFocus={false}
          secureTextEntry={false}
          focusStickBlinkingDuration={500}
          onTextChange={text => console.log(text)}
          onFilled={text => console.log(`OTP is ${text}`)}
          theme={{
            containerStyle: {
              width: '80%',
              alignSelf: 'center',
              paddingVertical: hp(2),
            },
            pinCodeContainerStyle: {
              ...RNStyles.shadow,
              backgroundColor: Colors.white,
              width: wp(15),
              borderWidth: 1,
              borderColor: Colors.black,
            },
            pinCodeTextStyle: {
              fontSize: FontSize.font26,
              fontFamily: FontFamily.SemiBold,
            },
            focusStickStyle: { backgroundColor: Colors.primary },
            focusedPinCodeContainerStyle: {
              borderColor: Colors.primary,
              borderWidth: wp(0.3),
            },
          }}
        />

        <View
          style={[
            RNStyles.flexRow,
            { alignSelf: 'center', paddingVertical: hp(2) },
          ]}>
          <RNText size={FontSize.font12}>{'Code expires in: '}</RNText>
          <TouchableOpacity>
            <RNText size={FontSize.font12} color={Colors.primary}>
              {time}
            </RNText>
          </TouchableOpacity>
        </View>

        <RNButton
          title={'Submit'}
          onPress={() => navigation.navigate(NavRoutes.ResetPassword)}
        />

        <View
          style={[
            RNStyles.flexRow,
            { alignSelf: 'center', paddingVertical: hp(2) },
          ]}>
          <RNText>{'Don’t receive the OTP? '}</RNText>
          <TouchableOpacity>
            <RNText color={Colors.primary}>{'Resend'}</RNText>
          </TouchableOpacity>
        </View>
      </RNScrollView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: wp(80),
    height: wp(70),
    alignSelf: 'center',
  },
});
