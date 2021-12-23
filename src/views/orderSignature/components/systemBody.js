/* eslint-disable no-alert */
import moment from 'moment';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/button';
import Api from '../../../services/Api';

const SystemBody = ({itemId, itemOrder}) => {
  const navigation = useNavigation();
  const uuid = itemId;
  const [isLoading, setIsLoading] = useState(false);
  const [signature, setSignature] = useState('');

  const HandlePress = () => {
    setIsLoading(true);
    const item = {
      signature: signature.trim(),
      dispatch_date: moment(new Date()).format('YYYY-MM-DD'),
    };
    Api.post(`dispatch/order/${uuid}`, item)
      .then(async res => {
        if (res) {
          setIsLoading(false);
          navigation.navigate('ConfirmOrder', {
            order: itemOrder,
          });
        }
      })
      .catch(err => {
        const message = err.response.data.message ? err.response.data.message : err.response.data.error;
        alert(message);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Text style={styles.title}>{uuid}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={'#EB2C39'} style={styles.isLoading} />
      ) : (
        <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={HandlePress} text={'Confirm'} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, alignSelf: 'center', backgroundColor: '#1175BA'},
  top: {
    backgroundColor: '#1175BA',
    width: Dimensions.get('screen').width,
    height: '75%',
  },
  title: {color: '#FFFFFF', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontSize: 18},
  lblButton: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  containButton: {
    width: 150,
    height: 35,
    backgroundColor: '#EB2C39',
    borderRadius: 35,
    marginTop: 15,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: '8%',
  },
  isLoading: {
    marginTop: 15,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: '8%',
  },
});
export default SystemBody;
