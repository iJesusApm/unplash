import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import Screen from './Screen';

const Stack = createNativeStackNavigator();
const options = {headerShown: false};

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Screen.Login} options={options} />
      <Stack.Screen name="Home" component={DrawerNavigator} options={options} />
      <Stack.Screen name="Order" component={Screen.Order} options={options} />
      <Stack.Screen name="OrderDispatch" component={Screen.OrderDispatch} options={options} />
      <Stack.Screen name="AccesoriesReception" component={Screen.AccesoriesReception} options={options} />
      <Stack.Screen name="OrderSignature" component={Screen.OrderSignature} options={options} />
      <Stack.Screen name="OrderInformation" component={Screen.OrderInformation} options={options} />
      <Stack.Screen name="OrderSearchInformation" component={Screen.OrderSearchInformation} options={options} />
      <Stack.Screen name="ConfirmOrder" component={Screen.ConfirmOrder} options={options} />
      <Stack.Screen name="OrderReceptionComplete" component={Screen.OrderReceptionComplete} options={options} />
      <Stack.Screen name="GraveyardInfo" component={Screen.GraveyardInfo} options={options} />
      <Stack.Screen name="GraveyardEntryForm" component={Screen.GraveyardEntryForm} options={options} />
      <Stack.Screen name="ConfirmGraveyard" component={Screen.ConfirmGraveyard} options={options} />
      <Stack.Screen name="GraveyardSignature" component={Screen.GraveyardSignature} options={options} />
      <Stack.Screen name="OrderDispatchComplete" component={Screen.OrderDispatchComplete} options={options} />
    </Stack.Navigator>
  );
};

export {AppNavigation};
