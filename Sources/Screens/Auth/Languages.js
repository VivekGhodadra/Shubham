import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNButton, RNContainer, RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { NavRoutes } from '../../Navigation';
import { Images, Strings } from '../../Constants';
import { DummyData } from '../../Utils';

export default function Languages({ navigation }) {
  return (
    <RNContainer topSafeArea>
      <RNImage source={Images.languageBg} style={styles.bgImage} />

      <ScrollView>
        <RNText style={styles.title}>
          {Strings.SelectYourPreferredLanguage}
        </RNText>

        <View style={styles.list}>
          {DummyData.languages.map((v, i) => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={i}
              style={styles.renders}>
              <RNText size={FontSize.font20} color={Colors.primary}>
                {v.title}
              </RNText>
            </TouchableOpacity>
          ))}
        </View>

        <RNButton
          title={Strings.Next}
          style={styles.next}
          onPress={() => navigation.navigate(NavRoutes.Welcome)}
        />
      </ScrollView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    paddingTop: hp(4),
    paddingBottom: hp(6),
    fontSize: FontSize.font20,
    fontFamily: FontFamily.SemiBold,
    alignSelf: 'center',
  },
  list: {
    paddingHorizontal: wp(6),
    ...RNStyles.flexWrapHorizontal,
    justifyContent: 'space-between',
  },
  renders: {
    ...RNStyles.center,
    width: wp(35),
    paddingVertical: hp(3),
    marginVertical: hp(1),
    backgroundColor: Colors.languageBg,
  },
  next: {
    alignSelf: 'flex-end',
    width: '35%',
    marginTop: hp(2),
  },
});
