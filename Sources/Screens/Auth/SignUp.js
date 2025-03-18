import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
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
import { NavRoutes } from '../../Navigation';

export default function SignUp({ navigation }) {
  return (
    <RNContainer topSafeArea style={RNStyles.container}>
      <RNScrollView>
        <RNText
          size={FontSize.font25}
          pVertical={hp(2)}
          pLeft={wp(6)}
          family={FontFamily.SemiBold}>
          {'Sign Up'}
        </RNText>

        <RNImage source={Images.signup} style={styles.image} />

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

        <View style={styles.terms}>
          <RNText
            size={FontSize.font14}>{`By Sign Up, You're agree to our `}</RNText>
          <TouchableOpacity>
            <RNText size={FontSize.font14} color={Colors.primary}>
              {'Terms & Conditions'}
            </RNText>
          </TouchableOpacity>
          <RNText size={FontSize.font14}>{` and `}</RNText>
          <TouchableOpacity>
            <RNText size={FontSize.font14} color={Colors.primary}>
              {'Privacy Policy'}
            </RNText>
          </TouchableOpacity>
        </View>

        <RNButton title={'Sign Up'} />

        <View style={styles.haveAccount}>
          <RNText size={FontSize.font14}>{'Already have an account? '}</RNText>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.replace(NavRoutes.Login)}>
            <RNText size={FontSize.font14} color={Colors.primary}>
              {'Log In'}
            </RNText>
          </TouchableOpacity>
        </View>
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
  terms: {
    ...RNStyles.flexWrapHorizontal,
    justifyContent: 'center',
    marginHorizontal: wp(6),
    paddingVertical: hp(2),
  },
  haveAccount: {
    ...RNStyles.flexRowCenter,
    paddingVertical: hp(2),
  },
});
