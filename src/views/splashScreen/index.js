import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterSplash from './components/footer';
import HeaderSplash from './components/header';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#005386" />
      <HeaderSplash />
      <View style={styles.center}>
        <Image style={styles.logo} source={require('../../assets/resources/logo.png')} />
      </View>
      <FooterSplash />
      <Image style={styles.image} source={require('../../assets/resources/container.png')} />
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
    marginTop: '35%',
    resizeMode: 'contain',
    width: 300,
    height: 250,
  },
  image: {resizeMode: 'contain', width: 300, height: 300, position: 'absolute', bottom: -30, marginRight: 'auto', marginLeft: -30},
  // image: {resizeMode: 'contain', width: 300, height: 300, marginTop: 10, marginRight: 'auto', marginLeft: -28},
});

export default SplashScreen;
