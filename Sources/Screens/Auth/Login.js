import { StyleSheet, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNHeader,
  RNStyles,
  RNText,
} from '../../Common';

export default function Login() {
  return (
    <RNContainer>
      <RNHeader title={'Login'}>
        <RNText>{'Hello World'}</RNText>
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
