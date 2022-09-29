import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screen from './Screen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Fee">
      <Drawer.Screen name="Fee" component={Screen.Fee} />
      <Drawer.Screen name="Profile" component={Screen.Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
