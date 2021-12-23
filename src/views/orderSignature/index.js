import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import FooterSplash from '../../components/footer';
import HeaderLogin from '../login/components/header';
import SystemBody from './components/systemBody';

const OrderSignature = ({route}) => {
  const {order, item} = route.params;
  return (
    <SafeAreaView style={styles.main}>
      <HeaderLogin />
      <Text style={styles.title}>Order</Text>
      <Text style={styles.name}>{order.order_name}</Text>
      <SystemBody itemId={item} itemOrder={order} />
      {/* <FooterSplash /> */}
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
});
export default OrderSignature;
