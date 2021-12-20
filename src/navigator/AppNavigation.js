import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import Screen from './Screen';

const Stack = createNativeStackNavigator();
const options = {headerShown: false, marginTop: 0};

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Screen.Login} options={options} />
      <Stack.Screen name="Home" component={DrawerNavigator} options={options} />
    </Stack.Navigator>
  );
};

export {AppNavigation};
