import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen from './Screen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Screen.Dashboard} />
      <Drawer.Screen name="Reception" component={Screen.Reception} />
      <Drawer.Screen name="Dispatch" component={Screen.Dispatch} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
