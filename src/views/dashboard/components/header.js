import React from 'react';
import {Image, StyleSheet, StatusBar} from 'react-native';
import {Header} from 'react-native-elements';

const HeaderDashboard = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header
        placement="left"
        leftComponent={<Image style={styles.image} source={require('../../../assets/resources/logo.png')} />}
        containerStyle={styles.contain}
        backgroundColor={'#FFFFFF'}
      />
    </>
  );
};
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    height: 70,
    marginBottom: 20,
  },
  image: {
    marginLeft: 15,
    marginBottom: 10,
    resizeMode: 'contain',
    width: 150,
    height: 80,
  },
});

export default HeaderDashboard;
