import React from 'react';
import {Text, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderWhiteWithoutButton from '../../components/headerWhiteWithoutButton';
import SystemBody from './components/systemBody';

const GraveyardSignature = ({route}) => {
  const {order, item} = route.params;
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground source={require('../../assets/resources/background.png')} style={styles.background}>
        <HeaderWhiteWithoutButton />
        <Text style={styles.title}>Graveyard Signature</Text>
        <SystemBody itemId={item} itemOrder={order} />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1},
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  name: {
    fontSize: 25,
    textAlign: 'center',
    color: '#E4E4E4',
  },
  background: {height: Dimensions.get('window').height, flex: 1},
});
export default GraveyardSignature;
