import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DrawerNavigator from './DrawerNavigator';
import Screen from './Screen';

const Stack = createNativeStackNavigator();
const options = {headerShown: false, marginTop: 0};

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Fee">
      <Stack.Screen name="Fee" component={Screen.Home} options={{...options}} />
      <Stack.Screen name="Post" component={Screen.Post} options={{...options}} />
      <Stack.Screen name="Profile" component={Screen.Profile} options={{...options}} />
    </Stack.Navigator>
  );
};

export {AppNavigation};
