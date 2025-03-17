import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RNIcon, RNStyles, RNText, RNScrollView } from './index';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { useInset } from '../Hooks';
import { Images } from '../Constants';

const RNHeader = ({
  title,
  scrollProps,
  safeArea,
  containerStyle,
  titleStyle,
  children,
  style,
  footer,
  noScroll,
  back = true,
  onBack,
  right,
}) => {
  const navigation = useNavigation();
  const styles = useStyles();

  const onBackPress = async () => {
    back ? navigation.goBack() : navigation.openDrawer();
  };

  return (
    <View style={RNStyles.container}>
      <View style={[styles.Container, containerStyle]}>
        <RNIcon
          icon={back ? Images.back : Images.drawer}
          onPress={onBack ? onBack : onBackPress}
          containerStyle={styles.icon}
          iconStyle={{ tintColor: Colors.primary }}
        />
        <RNText style={[styles.title, titleStyle]}>{title}</RNText>
        {right ? (
          right
        ) : (
          <View
            style={[styles.icon, { backgroundColor: Colors.transparent }]}
          />
        )}
      </View>

      {noScroll ? (
        children
      ) : (
        <RNScrollView
          style={style}
          scrollProps={scrollProps}
          safeArea={safeArea}>
          {children}
        </RNScrollView>
      )}
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const size = { icon: wp(4), iconContainer: wp(10) };
const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
    Container: {
      ...RNStyles.flexRowBetween,
      backgroundColor: Colors.white,
      paddingHorizontal: wp(4),
      paddingTop: inset.top + hp(1.5),
      paddingVertical: hp(1.5),
      borderBottomWidth: wp(0.3),
      borderBottomColor: Colors.black + '20',
    },
    icon: {
      ...RNStyles.center,
      width: size.iconContainer,
      height: size.iconContainer,
      borderRadius: wp(2),
      backgroundColor: Colors.secondary + '20',
    },
    title: {
      flex: 1,
      paddingHorizontal: hp(1),
      marginHorizontal: hp(1),
      fontSize: FontSize.font20,
      fontFamily: FontFamily.Medium,
      textAlign: 'center',
      // color: Colors.primary,
    },
    footer: {
      paddingBottom: inset.bottom,
    },
    langContainer: {
      // borderWidth: 1,
    },
    langIcon: {
      width: wp(5),
      height: wp(5),
      marginRight: wp(2),
    },
  });
};

export default RNHeader;
