import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen from './Screen';

import CustomDrawer from '../components/customDrawer';

const Drawer = createDrawerNavigator();
const options = {headerShown: false, marginTop: 0};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Dashboard"
      screenOptions={{
        overlayColor: '#FFFFFF',
        drawerActiveBackgroundColor: 'transparent',
        drawerActiveTintColor: '#FFFFFF',
        drawerInactiveTintColor: '#F1F1F1',
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 20,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Screen.Dashboard}
        options={{
          drawerIcon: ({color}) => <Ionicons name="home-outline" size={22} color={color} />,
          ...options,
        }}
      />
      <Drawer.Screen
        name="Reception"
        component={Screen.Reception}
        options={{
          drawerIcon: ({color}) => <Ionicons name="cube" size={22} color={color} />,
          ...options,
        }}
      />
      <Drawer.Screen
        name="Total Reception"
        component={Screen.ReceptionComplete}
        options={{
          drawerIcon: ({color}) => <Ionicons name="cube" size={22} color={color} />,
          ...options,
        }}
      />
      <Drawer.Screen
        name="Dispatch"
        component={Screen.Dispatch}
        options={{
          drawerIcon: ({color}) => <Ionicons name="car-outline" size={22} color={color} />,
          ...options,
        }}
      />
      <Drawer.Screen
        name="Total Dispatch"
        component={Screen.DispatchComplete}
        options={{
          drawerIcon: ({color}) => <Ionicons name="car-outline" size={22} color={color} />,
          ...options,
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Screen.Search}
        options={{
          drawerIcon: ({color}) => <Ionicons name="search" size={22} color={color} />,
          ...options,
        }}
      />
      <Drawer.Screen
        name="Graveyard Entry"
        component={Screen.GraveyardEntry}
        options={{
          drawerIcon: ({color}) => <Ionicons name="cube" size={22} color={color} />,
          ...options,
        }}
      />
      <Drawer.Screen
        name="Graveyard Dispatch"
        component={Screen.GraveyardDispatch}
        options={{
          drawerIcon: ({color}) => <Ionicons name="car-outline" size={22} color={color} />,
          ...options,
        }}
      />
      <Drawer.Screen
        name="Graveyard Search"
        component={Screen.GraveyardSearch}
        options={{
          drawerIcon: ({color}) => <Ionicons name="search" size={22} color={color} />,
          ...options,
        }}
      />
      <Drawer.Screen
        name="Client"
        component={Screen.Client}
        options={{
          drawerIcon: ({color}) => <Ionicons name="person" size={22} color={color} />,
          ...options,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
