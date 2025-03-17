import { StyleSheet, View } from 'react-native';
import {
  RNContainer,
  RNImage,
  RNScrollView,
  RNStyles,
  RNText,
} from '../../Common';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { SHInput } from '../../Components';

export default function Login() {
  return (
    <RNContainer topSafeArea style={styles.container}>
      <RNScrollView>
        <RNText
          size={FontSize.font25}
          pVertical={hp(2)}
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
      </RNScrollView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...RNStyles.container,
    paddingHorizontal: wp(4),
  },
  image: {
    width: wp(90),
    height: wp(80),
    alignSelf: 'center',
  },
});
