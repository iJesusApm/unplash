/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderLogin from '../login/components/header';
import Body from './components/body';

const Order = ({route}) => {
  const {data} = route.params;
  const order = data.order;
  return (
    <SafeAreaView style={styles.main}>
      <HeaderLogin />
      <View style={styles.main}>
        <Text style={styles.title}>Order</Text>
        <Text style={styles.name}>{order.order_name}</Text>
        <View style={{flex: 1, marginTop: 25}}>
          <Body title={'System'} />
          <Body title={'Item'} />
          <Body title={'Order'} check={data.order ? true : false} />
        </View>
      </View>
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
    fontSize: 20,
    textAlign: 'center',
    color: '#1175BA',
  },
});
export default Order;
