import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const HeaderDashboard = () => {
  return (
    <>
      <Header
        placement="left"
        leftComponent={<Image style={styles.image} source={require('../../../assets/resources/logoC.png')} />}
        containerStyle={styles.contain}
      />
    </>
  );
};
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    height: 100,
    backgroundColor: '#FFFFFF',
  },
  image: {
    marginLeft: 15,
    resizeMode: 'contain',
    width: 160,
    height: 80,
  },
});

export default HeaderDashboard;
