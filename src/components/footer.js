import React from 'react';
import {StyleSheet, Image} from 'react-native';

const FooterSplash = () => {
  return (
    <>
      <Image style={styles.image} source={require('../assets/resources/footer.png')} />
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    bottom: 0,
    resizeMode: 'stretch',
    width: '100%',
    height: 50,
  },
});

export default FooterSplash;
