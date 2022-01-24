/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, ActivityIndicator, FlatList, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderLogin from '../login/components/header';
import Api from '../../services/Api';
import AccesoriesBody from './components/accesoriesBody';
import ReceptionForm from './components/receptionForm';

const OrderReceptionComplete = ({route}) => {
  const {orderuuid} = route.params;
  const [orderPo, setOrderPo] = useState('');
  const [orderName, setOrderName] = useState('');
  const [type, setType] = useState([]);

  useEffect(() => {
    if (orderuuid) {
      Api.get(`orders/get-order/${orderuuid}`)
        .then(res => {
          if (res.status === 200) {
            setOrderName(res.order.order_name);
            setOrderPo(res.order.po);
            setType(res.order.types);
          } else {
            alert(`${res.messaje}`);
          }
        })
        .catch(() => {
          alert('An error has occurred. QR code no valid.');
        });
    }
  }, [orderuuid]);

  return (
    <SafeAreaView style={styles.main}>
      <HeaderLogin />
      <View style={styles.main}>
        <Text style={styles.title}>Order</Text>
        <Text style={styles.name}>{orderName}</Text>
        <Text style={styles.po}>{orderPo}</Text>
        <ScrollView style={{flex: 1, marginTop: 10}}>
          {type.length > 0 ? (
            <>
              <FlatList data={type} renderItem={({item}) => <AccesoriesBody data={item} />} keyExtractor={item => item.id.toString()} />
            </>
          ) : (
            <ActivityIndicator size="large" color={'#EB2C39'} style={styles.isLoading} />
          )}
          <ReceptionForm itemId={orderuuid} itemOrder={{order_name: orderName, po: orderPo}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1},
  title: {
    marginTop: 25,
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
  isLoading: {
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
export default OrderReceptionComplete;
