import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  RNButton,
  RNImage,
  RNInput,
  RNScrollView,
  RNStyles,
  RNText,
} from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { useInset } from '../../Hooks';

export default function SendInquiry({ visible, onClose }) {
  const styles = useStyles();

  return (
    <Modal visible={visible} animationType={'fade'} onRequestClose={onClose}>
      <View style={RNStyles.container}>
        <RNScrollView>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onClose}
            style={styles.back}>
            <RNImage
              source={Images.back}
              style={[RNStyles.image70, { tintColor: Colors.black }]}
            />
          </TouchableOpacity>

          <View style={styles.container}>
            <View style={styles.box}>
              <RNText
                size={FontSize.font20}
                family={FontFamily.SemiBold}
                pVertical={hp(2)}
                align={'center'}>
                {'SEND INQUIRY'}
              </RNText>

              <View style={styles.inputContainer}>
                <RNText style={styles.inputLabel}>{'Name'}</RNText>
                <RNInput
                  placeholder={'Please enter your name'}
                  style={styles.input}
                />
              </View>

              <View style={styles.inputContainer}>
                <RNText style={styles.inputLabel}>{'Email'}</RNText>
                <RNInput
                  placeholder={'Please enter your email'}
                  style={styles.input}
                  keyboardType={'email-address'}
                />
              </View>

              <View style={styles.inputContainer}>
                <RNText style={styles.inputLabel}>{'Mobile Number'}</RNText>
                <RNInput
                  placeholder={'Please enter your mobile number'}
                  style={styles.input}
                  maxLength={10}
                  keyboardType={'numeric'}
                />
              </View>

              <View style={RNStyles.flexRow}>
                <View style={styles.productContainer}>
                  <RNText style={styles.inputLabel}>{'Product'}</RNText>
                  <RNInput
                    placeholder={'Product'}
                    style={styles.productInput}
                    // maxLength={10}
                    keyboardType={'numeric'}
                  />
                </View>
                <View style={styles.productContainer}>
                  <RNText style={styles.inputLabel}>{'Quentity'}</RNText>
                  <RNInput
                    placeholder={'Quentity'}
                    style={styles.productInput}
                    // maxLength={10}
                    keyboardType={'numeric'}
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <RNText style={styles.inputLabel}>
                  {'Enter Buying Requirement Details'}
                </RNText>
                <RNInput
                  placeholder={'Please enter your requirement details'}
                  style={styles.input}
                  maxLength={10}
                  keyboardType={'numeric'}
                />
              </View>
              <RNText
                size={
                  FontSize.font6
                }>{`To get accurate quotes Please select name, order quantity, usage, special requests if any in your inquiry.`}</RNText>

              <RNButton
                title={'Submit'}
                style={styles.submit}
                textStyle={{ fontSize: FontSize.font14 }}
              />
            </View>
          </View>
        </RNScrollView>
      </View>
    </Modal>
  );
}

const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
    back: {
      ...RNStyles.center,
      width: wp(10),
      height: wp(10),
      marginTop: inset.top + hp(2),
      marginLeft: hp(2),
      marginBottom: hp(6),
    },
    container: {
      ...RNStyles.container,
      ...RNStyles.center,
    },
    box: {
      width: wp(90),
      paddingVertical: hp(1),
      paddingHorizontal: wp(4),
      borderRadius: wp(6),
      borderWidth: 1,
      borderColor: Colors.black + '40',
    },
    inputContainer: {
      paddingVertical: hp(0.5),
    },
    inputLabel: {
      fontSize: FontSize.font12,
    },
    input: {
      borderWidth: 1,
      borderRadius: wp(3),
      borderColor: Colors.black + '40',
    },
    productContainer: {
      flex: 1,
      marginHorizontal: wp(2),
      paddingVertical: hp(0.5),
    },
    productInput: {
      borderWidth: 1,
      borderRadius: wp(3),
      borderColor: Colors.black + '40',
    },
    submit: {
      alignSelf: 'flex-start',
      width: wp(35),
      marginHorizontal: 0,
      marginTop: hp(2),
    },
  });
};
