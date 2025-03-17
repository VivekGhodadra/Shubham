import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import { Login, Home, Languages, Welcome } from '../Screens';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  const Screens = useCallback(() => {
    return (
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        {/* Auth */}
        <Stack.Screen name={NavRoutes.Languages} component={Languages} />
        <Stack.Screen name={NavRoutes.Welcome} component={Welcome} />
        <Stack.Screen name={NavRoutes.Login} component={Login} />

        {/* App */}
        <Stack.Screen name={NavRoutes.Home} component={Home} />
      </Stack.Navigator>
    );
  }, []);

  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};

export default Routes;
