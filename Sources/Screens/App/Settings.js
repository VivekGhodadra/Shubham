import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNContainer, RNHeader, RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';

export default function Settings() {
  return (
    <RNContainer>
      <RNHeader
        title={'Settings'}
        containerStyle={{ backgroundColor: Colors.bg }}
        noScroll>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <RNText size={FontSize.font20} family={FontFamily.SemiBold}>
                {'Your Information'}
              </RNText>
              <View style={styles.lists}>
                <Render
                  icon={Images.setting_0}
                  title={'Edit Profile'}
                  onPress={() => {}}
                />
                <Render
                  icon={Images.setting_1}
                  title={'Security'}
                  onPress={() => {}}
                />
                <Render
                  icon={Images.setting_2}
                  title={'Privacy'}
                  onPress={() => {}}
                />
                <Render
                  icon={Images.setting_3}
                  title={'Saved Addresses'}
                  onPress={() => {}}
                />
                <Render
                  icon={Images.setting_4}
                  title={'Your Orders'}
                  onPress={() => {}}
                />
              </View>
            </View>

            <View style={styles.content}>
              <RNText size={FontSize.font20} family={FontFamily.SemiBold}>
                {'About & Support'}
              </RNText>
              <View style={styles.lists}>
                <Render
                  icon={Images.setting_5}
                  title={'Help & Support'}
                  onPress={() => {}}
                />
                <Render
                  icon={Images.setting_6}
                  title={'Notification'}
                  onPress={() => {}}
                />
              </View>
            </View>

            <View style={styles.content}>
              <RNText size={FontSize.font20} family={FontFamily.SemiBold}>
                {'Actions'}
              </RNText>
              <View style={styles.lists}>
                <Render
                  icon={Images.setting_7}
                  title={'Add Account'}
                  onPress={() => {}}
                />
                <Render
                  icon={Images.setting_8}
                  title={'Log Out'}
                  onPress={() => {}}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </RNHeader>
    </RNContainer>
  );
}

const Render = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.list}>
      <RNImage source={icon} style={styles.icon} />
      <RNText size={FontSize.font18}>{title}</RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.container,
    backgroundColor: Colors.bg,
  },
  content: {
    marginHorizontal: wp(6),
    paddingTop: hp(2),
  },
  lists: {
    marginTop: hp(1),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    backgroundColor: Colors.white,
    borderRadius: wp(5),
  },
  list: {
    ...RNStyles.flexRow,
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
  },
  icon: {
    width: wp(7),
    height: wp(7),
    marginRight: wp(4),
  },
});
