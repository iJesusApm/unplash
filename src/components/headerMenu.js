import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const HeaderMenu = () => {
  return (
    <>
      <Header
        placement="left"
        leftComponent={<Image style={styles.image} source={require('../assets/resources/logo.png')} />}
        containerStyle={styles.contain}
      />
    </>
  );
};
const styles = StyleSheet.create({
  contain: {
    marginTop: -120,
    backgroundColor: '#FFFFFF',
  },
  image: {
    marginLeft: 15,
    resizeMode: 'contain',
    width: 150,
    height: 80,
  },
});

export default HeaderMenu;
