import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import Screen from './Screen';

const Stack = createNativeStackNavigator();
const options = {headerShown: false};

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={Screen.Login} options={options} />
      <Stack.Screen name="Home" component={DrawerNavigator} options={options} />
      <Stack.Screen name="Order" component={Screen.Order} options={options} />
    </Stack.Navigator>
  );
};

export {AppNavigation};
