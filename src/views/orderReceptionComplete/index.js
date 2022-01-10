/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Dimensions, ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderLogin from '../login/components/header';
import Api from '../../services/Api';
import Button from '../../components/button';
import AccesoriesBody from './components/accesoriesBody';

const OrderReceptionComplete = ({route, navigation}) => {
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

  const Exit = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.main}>
      <HeaderLogin />
      <View style={styles.main}>
        <Text style={styles.title}>Order</Text>
        <Text style={styles.name}>{orderName}</Text>
        <Text style={styles.po}>{orderPo}</Text>
        <View style={{flex: 1, marginTop: 10}}>
          {type.length > 0 ? (
            <>
              <FlatList data={type} renderItem={({item}) => <AccesoriesBody data={item} />} keyExtractor={item => item.id.toString()} />
            </>
          ) : (
            <ActivityIndicator size="large" color={'#EB2C39'} style={styles.isLoading} />
          )}
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Exit} text={'Go back'} />
          </View>
        </View>
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
  lblButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  containButton: {
    width: Dimensions.get('window').width * 0.35,
    height: 40,
    backgroundColor: '#005386',
    borderRadius: 35,
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  isLoading: {
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
export default OrderReceptionComplete;
