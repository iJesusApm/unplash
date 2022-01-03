/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Dimensions, ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderLogin from '../login/components/header';
import SystemBody from './components/systemBody';
import Button from '../../components/button';
import AccesoriesBody from './components/accesoriesBody';
import ReceptionForm from '../order/components/receptionForm';

const AccesoriesReception = ({route, navigation}) => {
  const {order, itemId} = route.params;
  const [type, setType] = useState([]);
  const [isEmpty, setisEmpty] = useState(false);
  const orderName = order.order_name;
  const orderPo = order.po;
  const [isConfirm, setisConfirm] = useState(false);

  useEffect(() => {
    if (order) {
      if (order.orders[0].accesories.length > 0) {
        setType(order.orders[0].accesories);
      }
    }
  }, [order]);

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
            <>{isEmpty ? <SystemBody data={type} /> : <ActivityIndicator size="large" color={'#EB2C39'} style={styles.isLoading} />}</>
          )}
        </View>
        {isConfirm ? (
          <View style={{marginBottom: 25}}>
            <ReceptionForm itemId={itemId} itemOrder={order} accesories={true} />
          </View>
        ) : (
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Exit} text={'Continue Scan'} />
            <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={() => setisConfirm(!isConfirm)} text={'Confirm'} />
          </View>
        )}
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
    marginRight: '8%',
  },
});
export default AccesoriesReception;
