import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();
const options = {headerShown: false};

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={options} />
    </Stack.Navigator>
  );
};

export {AppNavigation};
