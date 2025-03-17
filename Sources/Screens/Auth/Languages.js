import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNButton, RNContainer, RNImage, RNStyles, RNText } from '../../Common';
import { Images } from '../../Constants';
import { useInset } from '../../Hooks';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData } from '../../Utils';

export default function Languages() {
  const styles = useStyles();
  return (
    <RNContainer>
      <RNImage source={Images.languageBg} style={styles.bgImage} />

      <ScrollView>
        <RNText style={styles.title}>
          {'Select Your  Preferred Language'}
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

        <RNButton title={'Next'} style={styles.next} />
      </ScrollView>
    </RNContainer>
  );
}

const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
    bgImage: {
      ...StyleSheet.absoluteFillObject,
    },
    title: {
      paddingTop: inset.top + hp(4),
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
};
