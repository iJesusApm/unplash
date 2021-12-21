import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const HeaderSplash = () => {
  return (
    <>
      <Header
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
    height: 60,
    borderBottomLeftRadius: 100,
  },
});

export default HeaderSplash;
