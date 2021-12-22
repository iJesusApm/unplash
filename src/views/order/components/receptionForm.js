/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator, Text, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import Button from '../../../components/button';
import Api from '../../../services/Api';

const ReceptionForm = ({itemId}) => {
  const id = itemId;
  const navigation = useNavigation();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(moment(new Date()).format('DD-MM-YYYY'));
  const [isLoading, setIsLoading] = useState(false);
  const inputTheme = {
    colors: {primary: '#005386', underlineColor: 'transparent'},
    roundness: 30,
  };

  const HandlePress = () => {
    setIsLoading(true);
    const item = {
      location: location.trim(),
      receive_date: moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD[T]HH:mm:ss'),
    };
    Api.post(`reception/order/system/item/${id}`, item)
      .then(async res => {
        if (res) {
          setIsLoading(false);
          navigation.push('Home');
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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.titleInput}>Date</Text>
        <TextInput
          placeholder="DD-MM-YYYY"
          value={date}
          onChangeText={text => setDate(text)}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>Location</Text>
        <TextInput
          value={location}
          onChangeText={text => setLocation(text)}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
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
  main: {marginHorizontal: '8%', marginTop: 20},
  body: {
    backgroundColor: '#E1E1E1',
    fontSize: 16,
    marginVertical: 10,
    height: 35,
    width: Dimensions.get('screen').width * 0.7,
    borderRadius: 30,
  },
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
  titleInput: {fontSize: 17, color: '#005386', fontWeight: 'bold'},
});
export default ReceptionForm;
