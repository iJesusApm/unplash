/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import moment from 'moment';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderLogin from '../login/components/header';
import SystemBody from './components/systemBody';
import Form from './components/form';
import Button from '../../components/button';
import Api from '../../services/Api';

const GraveyardInfo = ({route, navigation}) => {
  const {order, dispatch = false} = route.params;
  const [graveyardItem, setGraveyardItem] = useState(null);
  const orderPo = order.po_number;

  useEffect(() => {
    if (order) {
      setGraveyardItem(order);
    }
  }, [order]);

  const Exit = () => {
    navigation.goBack();
  };

  const Signature = () => {
    // navigation.navigate('GraveyardSignature', {
    //   order: order,
    //   item: uuid,
    // });
    const item = {
      signature: '-',
      dispatch_date: moment(new Date()).format('YYYY-MM-DD'),
    };
    Api.post(`graveyard/${graveyardItem.id}/dispatch`, item)
      .then(async res => {
        if (res.status === 200) {
          navigation.navigate('ConfirmGraveyard', {
            graveyard: graveyardItem,
            routeToNavigate: 'Graveyard Dispatch',
          });
        } else {
          alert(`${res.messaje}`);
        }
      })
      .catch(err => {
        const message = err.response.data.message ? err.response.data.message : err.response.data.error;
        alert(message);
      });
  };

  return (
    <SafeAreaView style={styles.main}>
      <HeaderLogin />
      <ScrollView style={styles.main}>
        <Text style={styles.title}>Graveyard</Text>
        <Text style={styles.po}>{orderPo}</Text>
        {!dispatch ? (
          <>
            <View style={{flex: 1, marginTop: 5}}>
              <SystemBody data={graveyardItem ? graveyardItem : null} />
            </View>
            <Form graveyardItem={graveyardItem} />
          </>
        ) : (
          <>
            <View style={{flex: 1, marginTop: 5}}>
              <SystemBody data={graveyardItem ? graveyardItem : null} />
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Exit} text={'Go back'} />
              <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Signature} text={'Confirm'} />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1},
  title: {
    marginTop: 15,
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
    marginHorizontal: 5,
  },
});
export default GraveyardInfo;
