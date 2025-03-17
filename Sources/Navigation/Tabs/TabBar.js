import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';
import { useInset } from '../../Hooks';
import { RNStyles } from '../../Common';

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
          { img: Images.tab1, title: 'News' },
          { img: Images.tab2, title: 'Scanner' },
          { img: Images.tab3, title: 'Profile' },
          { img: Images.tab4, title: 'Notification' },
        ];

        {
          /* if (index === 2) {
          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              activeOpacity={0.6}
              onLongPress={onLongPress}
              style={styles.home}>
              <Image source={Images.tab1} style={styles.homeIcon} />
            </TouchableOpacity>
          );
        } */
        }

        return (
          <View key={index} style={styles.renderContainer}>
            <TouchableOpacity
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
                    tintColor: isFocused ? Colors.black : Colors.black + '99',
                  },
                ]}
              />
              <Text
                style={styles.text}
                color={isFocused ? Colors.black : Colors.black + '99'}>
                {data[index].title}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const size = { icon: wp(5), home: wp(12) };
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      // backgroundColor: Colors.white,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: hp(1),
      paddingHorizontal: wp(2),
      paddingBottom: inset.bottom + hp(inset.bottom > 0 ? 0 : 1),
      backgroundColor: Colors.white,
    },
    renderContainer: {
      width: '20%',
      // borderWidth: 1,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      paddingVertical: hp(1.2),
    },
    icons: {
      width: size.icon,
      height: size.icon,
      marginBottom: hp(0.5),
    },
    text: {
      fontSize: FontSize.font10,
      paddingLeft: wp(1),
    },
    home: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: size.home,
      height: size.home,
      backgroundColor: Colors.primary,
      zIndex: 1,
      top: -hp(3),
      left: wp(42.5),
      borderRadius: 100,
    },
    homeIcon: {
      ...RNStyles.image60,
      tintColor: Colors.white,
    },
  });
};
