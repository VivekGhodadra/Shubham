import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNButton, RNContainer, RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { NavRoutes } from '../../Navigation';
import { Images, Strings } from '../../Constants';
import { DummyData } from '../../Utils';
import { useState } from 'react';

export default function Languages({ navigation }) {
  const [State, setState] = useState({ selected: null });

  return (
    <RNContainer topSafeArea>
      <RNImage
        source={Images.languageBg}
        style={StyleSheet.absoluteFillObject}
      />

      <ScrollView>
        <RNText style={styles.title}>
          {Strings.SelectYourPreferredLanguage}
        </RNText>

        <View style={styles.list}>
          {DummyData.languages.map((v, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.6}
              onPress={() => setState(p => ({ ...p, selected: v }))}
              style={[
                styles.renders,
                {
                  borderColor:
                    State.selected?.title === v.title
                      ? Colors.primary
                      : Colors.transparent,
                },
              ]}>
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
    paddingVertical: hp(2.5),
    marginVertical: hp(1),
    backgroundColor: Colors.languageBg,
    borderWidth: wp(0.4),
  },
  next: {
    alignSelf: 'flex-end',
    width: '35%',
    marginTop: hp(4),
  },
});
