import React from 'react';
import {StyleSheet, Image} from 'react-native';

const HeaderSplash = () => {
  return (
    <>
      <Image style={styles.image} source={require('../../../assets/resources/header.png')} />
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    resizeMode: 'stretch',
    width: '100%',
    height: 40,
  },
});

export default HeaderSplash;
