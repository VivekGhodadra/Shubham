import { StyleSheet } from 'react-native';
import { RNContainer, RNImage } from '../../Common';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import { Images } from '../../Constants';
import { wp } from '../../Theme';

export default function Scanner() {
  const isFocused = useIsFocused();
  const device = useCameraDevice('back');

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  if (!device) return null;
  return (
    <RNContainer>
      <Camera
        style={{ flex: 1 }}
        device={device}
        isActive={isFocused}
        codeScanner={codeScanner}
      />
      <RNImage source={Images.qr} style={styles.qr} />
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  qr: {
    position: 'absolute',
    width: wp(70),
    height: wp(70),
    alignSelf: 'center',
    top: '30%',
  },
});
