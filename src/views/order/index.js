/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderLogin from '../login/components/header';
import ReceptionForm from './components/receptionForm';
import SystemBody from './components/systemBody';
import Button from '../../components/button';
import AlreadyText from '../../components/alreadyText';

const Order = ({route, navigation}) => {
  const {order, item, fromReception = false, total} = route.params;
  const [isRecived, setisRecived] = useState(false);
  const system = order;
  const orderName = order.type.order.order_master.order_name;
  const orderPo = order.type.order.order_master.po;
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (order.recived_date) {
      setisRecived(true);
    }
  }, [order]);

  const Exit = () => {
    navigation.goBack();
  };

  const Component = () => {
    setValidate(true);
    setisRecived(!isRecived);
  };

  return (
    <SafeAreaView style={styles.main}>
      <HeaderLogin />
      <ScrollView style={styles.main}>
        <Text style={styles.title}>Order</Text>
        <Text style={styles.name}>{orderName}</Text>
        <Text style={styles.po}>{orderPo}</Text>
        <View style={{flex: 1, marginTop: 10}}>
          <SystemBody data={system ? system : null} />
          {isRecived && total > 0 ? (
            <>
              <Text style={styles.fontStyle}>Component with remaining quantity of {total}</Text>
              <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Component} text={'Confirm'} />
            </>
          ) : null}
          {isRecived ? (
            <AlreadyText text={'This order has already been received'} />
          ) : (
            <>
              {fromReception || validate ? (
                <ReceptionForm itemId={item} itemOrder={order} />
              ) : (
                <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Exit} text={'Go back'} />
              )}
            </>
          )}
        </View>
      </ScrollView>
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
  fontStyle: {color: 'red', textAlign: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 10},
});
export default Order;
