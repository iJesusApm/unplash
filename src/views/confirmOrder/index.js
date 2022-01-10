/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ImageBackground, StatusBar, Text, Dimensions, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import HeaderWhiteWithoutButton from '../../components/headerWhiteWithoutButton';
import Button from '../../components/button';

const ConfirmOrder = ({route}) => {
  const {order, routeToNavigate} = route.params;
  const navigation = useNavigation();

  const Confirm = () => {
    navigation.push('Home', {screen: `${routeToNavigate}`});
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <HeaderWhiteWithoutButton />
      <ImageBackground source={require('../../assets/resources/background.png')} style={styles.background}>
        <View>
          <Text style={styles.title}>Order</Text>
          <Text style={styles.name}>{order.order_name}</Text>
          <Text style={styles.po}>{order.po}</Text>
        </View>
        <View style={{alignItems: 'center', paddingTop: 20, flex: 1}}>
          <Image source={require('../../assets/resources/ok.png')} style={styles.image} />
          <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Confirm} text={'Ok'} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#FFFFFF', marginRight: '0.1%'},
  background: {height: Dimensions.get('window').height},
  image: {
    resizeMode: 'contain',
    width: 280,
    height: 280,
  },
  isLoading: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  name: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  po: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  lblButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  containButton: {
    width: Dimensions.get('window').width * 0.3,
    height: 35,
    backgroundColor: '#1FB6DB',
    borderRadius: 35,
    marginTop: -75,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
export default ConfirmOrder;
