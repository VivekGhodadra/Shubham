import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Scanner, News } from '../../Screens';
import NavRoutes from '../NavRoutes';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBar={p => <TabBar {...p} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name={NavRoutes.Tabs} component={Home} />
      <Tab.Screen name={NavRoutes.Scanner} component={Scanner} />
      <Tab.Screen name={NavRoutes.News} component={News} />
    </Tab.Navigator>
  );
}
