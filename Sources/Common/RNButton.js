import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import RNPagginationLoader from './RNPagginationLoader';
import RNStyles from './RNStyles';
import RNText from './RNText';
import RNImage from './RNImage';

const RNButton = ({
  title,
  style,
  textStyle,
  onPress,
  disable,
  icon,
  iconStyle,
  isLoading,
}) => {
  const styles = useStyles({ disable });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disable}
      style={[styles.Container, style]}>
      {isLoading ? (
        <RNPagginationLoader size={'small'} color={Colors.white} />
      ) : (
        <>
          {icon && <RNImage source={icon} style={[styles.icon, iconStyle]} />}
          <View style={RNStyles.flexRowBetween}>
            <RNText style={[styles.buttonText, textStyle]}>{title}</RNText>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const iconSize = wp(8);
const useStyles = ({ disable }) => {
  return StyleSheet.create({
    Container: {
      ...RNStyles.center,
      ...RNStyles.flexRow,
      backgroundColor: disable ? Colors.primary + '80' : Colors.primary,
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(8),
      marginVertical: hp(1),
      borderRadius: wp(4),
      marginHorizontal: wp(4),
    },
    buttonText: {
      flex: 1,
      color: Colors.white,
      textAlign: 'center',
      fontFamily: FontFamily.SemiBold,
      fontSize: FontSize.font18,
    },
    icon: {
      width: iconSize,
      height: iconSize,
      position: 'absolute',
      left: wp(8),
    },
    doubleTicks: {
      ...RNStyles.icon,
    },
  });
};

export default RNButton;
