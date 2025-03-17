import { StyleSheet } from 'react-native';
import { Colors, hp, wp } from '../Theme';
const RNStyles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRow1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexRowEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexWrapHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  width90: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: hp(0.5),
  },
  image100: {
    width: '100%',
    height: '100%',
  },
  image90: {
    width: '90%',
    height: '90%',
  },
  image80: {
    width: '80%',
    height: '80%',
  },
  image70: {
    width: '70%',
    height: '70%',
  },
  image60: {
    width: '60%',
    height: '60%',
  },
  image50: {
    width: '50%',
    height: '50%',
  },
  image40: {
    width: '40%',
    height: '40%',
  },
  image30: {
    width: '30%',
    height: '30%',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: Colors.black,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 7,
  },
  imageLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: wp(6),
    height: wp(6),
  },
  devider: {
    width: '100%',
    height: wp(0.3),
    backgroundColor: Colors.black + '20',
  },
});
export default RNStyles;
