import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <>
      <Text style={styles.text}>Discover</Text>
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
