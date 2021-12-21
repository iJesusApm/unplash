import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderSplash from './components/header';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <HeaderSplash />
      <View style={styles.center}>
        <Image style={styles.logo} source={require('../../assets/resources/logoC.png')} />
      </View>
      <View>
        <Image style={styles.image} source={require('../../assets/resources/container.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  center: {
    alignItems: 'center',
  },
  logo: {
    marginTop: '20%',
    resizeMode: 'contain',
    width: 300,
    height: 250,
  },
  image: {resizeMode: 'contain', width: 250, height: 280, marginTop: 10, marginRight: 'auto', marginLeft: -28},
});

export default SplashScreen;
