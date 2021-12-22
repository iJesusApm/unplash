/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterSplash from '../../components/footer';
import HeaderLogin from '../login/components/header';
import Body from './components/body';

const Order = ({route}) => {
  const {order, item} = route.params;
  const system = order.orders[0].types[1].items[0];
  return (
    <SafeAreaView style={styles.main}>
      <HeaderLogin />
      <View style={styles.main}>
        <Text style={styles.title}>Order</Text>
        <Text style={styles.name}>{order.order_name}</Text>
        <Text style={styles.po}>{order.po}</Text>
        <View style={{flex: 1, marginTop: 25}}>
          <Body title={'System'} data={system} />
        </View>
      </View>
      <FooterSplash />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1},
  title: {
    marginTop: 50,
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
});
export default Order;
