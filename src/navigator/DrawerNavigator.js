import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screen from './Screen';

const Drawer = createDrawerNavigator();
const options = {headerShown: false, marginTop: 0};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Fee">
      <Drawer.Screen name="Fee" component={Screen.Fee} options={{...options}} />
      <Drawer.Screen name="Profile" component={Screen.Profile} options={{...options}} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
