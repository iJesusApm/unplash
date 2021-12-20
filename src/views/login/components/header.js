import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const HeaderLogin = () => {
  return (
    <>
      <Header
        placement="left"
        leftComponent={<Image style={styles.image} source={require('../../../assets/resources/logoW.png')} />}
        containerStyle={styles.contain}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#1175BA', '#20B8DF'],
          start: {x: 0, y: 0.5},
          end: {x: 1.2, y: 0.5},
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    height: 80,
    borderBottomRightRadius: 100,
  },
  image: {
    marginLeft: 15,
    resizeMode: 'contain',
    width: 160,
    height: 80,
  },
});

export default HeaderLogin;
