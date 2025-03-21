import { StyleSheet, View } from 'react-native';
import { RNContainer, RNText } from '../../Common';
import { usePermissions } from '../../Hooks';
import { useEffect } from 'react';

export default function Home() {
  const { requestPermissions } = usePermissions();

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <RNContainer>
      <RNText>{'Home'}</RNText>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
