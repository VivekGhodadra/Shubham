import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import {
  Login,
  Languages,
  Welcome,
  SignUp,
  ForgotPassword,
  ResetPassword,
  Settings,
} from '../Screens';
import SplashScreen from 'react-native-splash-screen';
import Tabs from './Tabs';
import { ProductDetails } from '../Screens/App';

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
        {/* App */}
        <Stack.Screen name={NavRoutes.Home} component={Tabs} />
        <Stack.Screen
          name={NavRoutes.ProductDetails}
          component={ProductDetails}
        />
        <Stack.Screen name={NavRoutes.Settings} component={Settings} />
        {/* Auth */}
        <Stack.Screen name={NavRoutes.Languages} component={Languages} />
        <Stack.Screen name={NavRoutes.Welcome} component={Welcome} />
        <Stack.Screen name={NavRoutes.Login} component={Login} />
        <Stack.Screen name={NavRoutes.SignUp} component={SignUp} />
        <Stack.Screen
          name={NavRoutes.ForgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={NavRoutes.ResetPassword}
          component={ResetPassword}
        />
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
