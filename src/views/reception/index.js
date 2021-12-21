/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderDashboard from '../dashboard/components/header';

const Reception = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <HeaderDashboard />
      <View style={{marginTop: 15}}>
        <ImageBackground source={require('../../assets/resources/background-1.png')} style={{width: '100%', height: '100%'}}>
          <View>
            <View style={styles.rowReception}>
              <Ionicons name="cube" size={22} color={'#FFFFFF'} />
              <Text style={styles.textReception}>Reception</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1},
  rowReception: {flexDirection: 'row', alignItems: 'center', marginLeft: 20, paddingTop: 15},
  textReception: {fontSize: 20, color: '#FFFFFF', marginLeft: 15, letterSpacing: 2},
});
export default Reception;
