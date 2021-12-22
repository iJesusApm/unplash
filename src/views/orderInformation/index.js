/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, Dimensions, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/button';
import FooterSplash from '../../components/footer';
import HeaderLogin from '../login/components/header';
import SystemBody from './components/systemBody';

const OrderInformation = ({route, navigation}) => {
  const {order} = route.params;
  const system = order.orders[0].types[1] ? order.orders[0].types[1].items[0] : null;

  const Exit = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.main}>
      <HeaderLogin />
      <FooterSplash />
      <ScrollView style={styles.main}>
        <Text style={styles.title}>Order Information</Text>
        <Text style={styles.name}>{order.order_name}</Text>
        <Text style={styles.po}>{order.po}</Text>
        <View style={{flex: 1}}>
          <SystemBody data={system ? system : null} />
          <SystemBody data={system ? system : null} />
          <SystemBody data={system ? system : null} />
          <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Exit} text={'Go back'} />
        </View>
      </ScrollView>
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
  },
  name: {
    fontSize: 25,
    textAlign: 'center',
    color: '#1175BA',
  },
  po: {
    fontSize: 20,
    textAlign: 'center',
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
    backgroundColor: '#005386',
    borderRadius: 35,
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
export default OrderInformation;
