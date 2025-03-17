import { StyleSheet } from 'react-native';
import { RNButton, RNContainer, RNImage, RNText } from '../../Common';
import { Images, Strings } from '../../Constants';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { NavRoutes } from '../../Navigation';

export default function Welcome({ navigation }) {
  return (
    <RNContainer topSafeArea>
      <RNImage source={Images.welcome} style={styles.image} />
      <RNText style={styles.title}>{Strings.WelcometoShubham}</RNText>
      <RNText style={styles.text}>{Strings.welcomeText}</RNText>
      <RNButton
        title={Strings.Next}
        style={styles.next}
        onPress={() => navigation.navigate(NavRoutes.Welcome)}
      />
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: wp(80),
    height: wp(80),
    alignSelf: 'center',
    marginTop: wp(6),
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: wp(12),
    paddingVertical: hp(2),
    fontSize: FontSize.font23,
    fontFamily: FontFamily.SemiBold,
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: wp(6),
    fontSize: FontSize.font21,
  },
  next: {
    alignSelf: 'flex-end',
    width: '35%',
    marginTop: hp(4),
  },
});
