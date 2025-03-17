import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNInput, RNStyles, RNText, RNImage, RNIcon } from '../../Common';
import { Colors, FontSize, hp, wp } from '../../Theme';

const FLInput = (
  {
    title,
    icon,
    text,
    textIcon,
    textStyle,
    onIconPress,
    onPress,
    error,
    errorMsg,
    containerStyle,
    inputContainerStyle,
    disable,
    titleStyle,
    leftIcon,
    rightIcon,
    ...rest
  },
  ref,
) => {
  const styles = useStyles({ error, disable });
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {leftIcon && <RNImage source={leftIcon} style={styles.icon} />}
        <RNInput ref={ref} style={styles.input} editable={!disable} {...rest} />
        {/* {rightIcon && <RNImage source={rightIcon} style={styles.icon} />} */}
        {rightIcon && <RNIcon icon={rightIcon} iconStyle={styles.icon} />}
      </View>
      {error && <RNText style={styles.errorMsg}>{errorMsg}</RNText>}
    </View>
  );
};

const useStyles = ({ error, disable }) => {
  return StyleSheet.create({
    container: {
      marginBottom: hp(1),
      borderWidth: 1,
    },
    inputContainer: {
      ...RNStyles.shadow,
      ...RNStyles.flexRowBetween,
      backgroundColor: Colors.white,
      paddingHorizontal: wp(4),
      borderRadius: wp(4),
      paddingVertical: hp(1),
      marginTop: hp(1),
      borderWidth: wp(0.3),
      borderColor: error ? Colors.error : Colors.black,
    },
    input: {
      flex: 1,
      marginVertical: 0,
      paddingHorizontal: 0,
      color: disable ? Colors.black + '50' : Colors.black,
      paddingLeft: wp(4),
    },
    errorMsg: {
      fontSize: FontSize.font12,
      paddingTop: hp(1),
      color: Colors.error,
    },
    icon: {
      width: wp(7),
      height: wp(7),
    },
  });
};

export default forwardRef(FLInput);
