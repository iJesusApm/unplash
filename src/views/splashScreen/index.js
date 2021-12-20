import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
    marginTop: '30%',
    resizeMode: 'contain',
    width: 280,
    height: 280,
  },
  image: {resizeMode: 'contain', width: 250, height: 280, marginTop: 10, marginRight: 'auto', marginLeft: -28},
});

export default SplashScreen;
