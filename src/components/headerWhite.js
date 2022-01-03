import React from 'react';
import {Image, StyleSheet, StatusBar, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header, Icon} from 'react-native-elements';

const HeaderWhite = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.toggleDrawer();
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header
        placement="left"
        leftComponent={
          <View style={styles.rowCenter}>
            <TouchableOpacity onPress={goBack} style={{marginLeft: 5}}>
              <Icon name="menu" color="gray" size={30} />
            </TouchableOpacity>
            <Image style={styles.image} source={require('../assets/resources/logo.png')} />
          </View>
        }
        containerStyle={styles.contain}
        backgroundColor={'#FFFFFF'}
      />
    </>
  );
};
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    height: 50,
    marginBottom: 20,
  },
  image: {
    marginLeft: 5,
    resizeMode: 'contain',
    width: 150,
  },
  rowCenter: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
});

export default HeaderWhite;
