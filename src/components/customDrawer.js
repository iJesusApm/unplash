import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderMenu from './headerMenu';

const CustomDrawer = props => {
  const navigation = useNavigation();
  const HandleClick = async () => {
    await AsyncStorage.clear();
    navigation.push('Login');
  };

  return (
    <View style={styles.main}>
      <HeaderMenu />
      <ImageBackground source={require('../assets/resources/background-menu.png')} style={styles.background}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <TouchableOpacity onPress={HandleClick}>
            <View style={styles.rowLogout}>
              <Ionicons name="exit-outline" size={22} color={'#FFFFFF'} />
              <Text style={styles.textLogout}>Logout</Text>
            </View>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, marginTop: 120},
  rowLogout: {flexDirection: 'row', alignItems: 'center', marginLeft: 20, paddingTop: 15},
  textLogout: {fontSize: 20, color: '#FFFFFF', marginLeft: 15},
  background: {height: Dimensions.get('window').height},
});
export default CustomDrawer;
