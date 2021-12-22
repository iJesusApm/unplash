/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderWhite from '../../components/headerWhite';
import Layout from './components/layout';

const Dispatch = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <HeaderWhite />
      <View>
        <ImageBackground source={require('../../assets/resources/background-2.png')} style={{width: '100%', height: '100%'}}>
          <View style={styles.rowDispatch}>
            <Ionicons name="car-outline" size={22} color={'#FFFFFF'} />
            <Text style={styles.textDispatch}>Dispatch</Text>
          </View>
          <View style={styles.qr}>
            <Text style={styles.textQr}>Scan</Text>
            <Layout />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1},
  rowDispatch: {flexDirection: 'row', alignItems: 'center', marginLeft: 20, paddingTop: 15},
  textDispatch: {fontSize: 20, color: '#FFFFFF', marginLeft: 15, letterSpacing: 2},
  qr: {alignItems: 'center', marginLeft: 20, paddingTop: 15},
  textQr: {fontSize: 25, color: '#FFFFFF', letterSpacing: 2, marginVertical: 20, fontWeight: 'bold'},
});
export default Dispatch;
