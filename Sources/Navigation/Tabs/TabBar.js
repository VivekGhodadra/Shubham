import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { useInset } from '../../Hooks';
import { RNStyles, RNText } from '../../Common';

export default function TabContent({ state, descriptors, navigation }) {
  const styles = useStyles();
  return (
    <View style={styles.content}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({ type: 'tabLongPress', target: route.key });
        };

        const data = [
          { img: Images.tab0, title: 'Home' },
          { img: Images.tab1, title: 'Scanner' },
          { img: Images.tab2, title: 'News' },
        ];

        if (index === 1) {
          return (
            <View key={index} style={styles.scanners}>
              <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.6}
                onLongPress={onLongPress}
                style={styles.scanner}>
                <Image source={Images.tab1} style={RNStyles.image60} />
              </TouchableOpacity>
            </View>
          );
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole={'button'}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            activeOpacity={0.6}
            onLongPress={onLongPress}
            style={[styles.button]}>
            <Image
              source={data[index].img}
              resizeMode={'contain'}
              style={[
                styles.icons,
                {
                  tintColor: isFocused ? Colors.focused : Colors.white,
                },
              ]}
            />
            <RNText
              size={FontSize.font12}
              color={isFocused ? Colors.focused : Colors.white}>
              {data[index].title}
            </RNText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const size = { icon: wp(7), home: wp(20) };
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    content: {
      ...RNStyles.flexRowBetween,
      paddingHorizontal: wp(4),
      paddingBottom: inset.bottom,
      backgroundColor: Colors.primary,
    },
    button: {
      ...RNStyles.center,
      paddingVertical: hp(1),
      width: '35%',
    },
    icons: {
      width: size.icon,
      height: size.icon,
      marginBottom: hp(0.5),
    },
    scanners: {
      ...RNStyles.center,
      width: size.home,
      height: size.home,
      backgroundColor: Colors.white,
      zIndex: 1,
      position: 'absolute',
      top: -hp(5),
      left: wp(40),
      borderRadius: 100,
    },
    scanner: {
      ...RNStyles.image80,
      ...RNStyles.center,
      backgroundColor: Colors.primary,
      borderRadius: 100,
    },
  });
};
