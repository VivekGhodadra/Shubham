import { StyleSheet, View } from 'react-native';
import { RNContainer, RNText } from '../../Common';
import { SearchBar } from '../../Components/Common';

export default function News() {
  return (
    <RNContainer topSafeArea={true} bottomSafeArea={true}>
      <SearchBar />
    </RNContainer>
  );
}

const categoryButton = () => (
  <TouchableOpacity style={styles.buyButton}>
    <RNText style={styles.buyText}>Buy Now</RNText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({});
