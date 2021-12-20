/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import Button from '../../../components/button';
import Api from '../../../services/Api';

const Form = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputTheme = {
    colors: {primary: '#1175BA', underlineColor: 'transparent'},
    roundness: 30,
  };

  const HandlePress = () => {
    setIsLoading(true);
    const item = {
      email: email.trim(),
      password: password.trim(),
    };

    Api.post('auth/login', item)
      .then(async res => {
        if (res) {
          await AsyncStorage.clear();
          AsyncStorage.setItem('user', JSON.stringify(res.user));
          AsyncStorage.setItem('id', JSON.stringify(res.user.id));
          AsyncStorage.setItem('uuid', JSON.stringify(res.user.uuid));
          AsyncStorage.setItem('token', res.access_token);
          setIsLoading(false);
          navigation.navigate('Home');
        }
      })
      .catch(err => {
        const message = err.response.data.message ? err.response.data.message : err.response.data.error;
        alert(message);
        setIsLoading(false);
      });
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.body}
            theme={inputTheme}
            underlineColor="transparent"
            maxLength={76}
            left={<TextInput.Icon name={'account-outline'} color={'#808080'} size={30} />}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.body}
            theme={inputTheme}
            underlineColor="transparent"
            maxLength={60}
            secureTextEntry={true}
            autoCompleteType="password"
            left={<TextInput.Icon name={'lock-outline'} color={'#808080'} size={30} />}
          />
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color={'#1175BA'} style={styles.isLoading} />
      ) : (
        <Button titleStyle={styles.loginText} touchStyle={styles.loginContainer} action={HandlePress} text={'Iniciar Sesión'} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {marginHorizontal: '8%'},
  body: {
    backgroundColor: '#F1F1F1',
    fontSize: 16,
    marginVertical: 10,
    height: 55,
    borderRadius: 30,
  },
  loginText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  loginContainer: {
    width: 150,
    height: 35,
    backgroundColor: '#1175BA',
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
export default Form;
