import React from 'react';
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Header = () => {
  return (
    <>
      <Animatable.Text animation="fadeIn" delay={700} duration={350} style={styles.text}>
        Discover
      </Animatable.Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: 'Museo Sans',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 28,
    letterSpacing: 0,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default Header;
