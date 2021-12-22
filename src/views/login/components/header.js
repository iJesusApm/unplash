import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const HeaderLogin = () => {
  return (
    <>
      <Header
        placement="left"
        leftComponent={<Image style={styles.image} source={require('../../../assets/resources/logoW.png')} />}
        containerStyle={styles.contain}
        backgroundColor={'#005386'}
      />
    </>
  );
};
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    height: 70,
    borderBottomRightRadius: 100,
    backgroundColor: '#005386',
  },
  image: {
    marginLeft: 15,
    marginBottom: 10,
    resizeMode: 'contain',
    width: 150,
    height: 80,
  },
});

export default HeaderLogin;
