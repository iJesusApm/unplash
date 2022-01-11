/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, ImageBackground, Dimensions, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Api from '../../services/Api';

import Button from '../../components/button';
import HeaderWhite from '../../components/headerWhite';
import Layout from './components/layout';

const Reception = () => {
  const [qrCode, setqrCode] = useState('');
  const navigation = useNavigation();
  const inputTheme = {
    colors: {primary: '#005386', underlineColor: 'transparent'},
    roundness: 30,
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const Search = () => {
    if (isEnabled) {
      Api.get(`qr/${qrCode}/accessories`)
        .then(res => {
          if (res.status === 200) {
            let acum = 0;
            res.order.orders.map(item => {
              if (item.accesories.length > 0 && item.accesories) {
                item.accesories.map(c => {
                  if (c.items.length > 0 && c.items) {
                    c.items.map(e => {
                      if (e.count_ordered) {
                        acum += parseInt(e.count_ordered);
                      }
                    });
                  }
                });
              }
            });
            navigation.navigate('AccesoriesReception', {
              order: res.order,
              itemId: res.order.orders[0] ? res.order.orders[0].id : res.order.id,
              total: acum,
            });
          } else {
            alert(`${res.messaje}`);
          }
        })
        .catch(() => {
          alert('An error has occurred. QR code no valid.');
        });
    } else {
      Api.get(`qr/${qrCode}`)
        .then(res => {
          if (res.status === 200) {
            navigation.navigate('Order', {
              order: res.item,
              item: res.item.id,
              fromReception: true,
              total: res.item.count_ordered,
            });
          } else {
            alert(`${res.messaje}`);
          }
        })
        .catch(() => {
          alert('An error has occurred. QR code no valid.');
        });
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <HeaderWhite />
      <ScrollView>
        <ImageBackground source={require('../../assets/resources/background.png')} style={styles.background}>
          <View style={styles.rowReception}>
            <Ionicons name="cube" size={22} color={'#FFFFFF'} />
            <Text style={styles.textReception}>Reception</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.textQr}>Scan</Text>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.switchText}>Systems</Text>
              <Switch
                trackColor={{false: '#767577', true: '#46C455'}}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={styles.switchText}>Accesories</Text>
            </View>
            <Layout isEnabled={isEnabled} />
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <TextInput
              value={qrCode}
              onChangeText={text => setqrCode(text)}
              style={styles.body}
              theme={inputTheme}
              underlineColor="transparent"
              maxLength={76}
              left={<TextInput.Icon name={'magnify'} color={'#005386'} size={30} />}
            />
            <Button titleStyle={styles.loginText} touchStyle={styles.loginContainer} action={Search} text={'Search'} />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#FFFFFF'},
  rowReception: {flexDirection: 'row', alignItems: 'center', marginLeft: 20, paddingTop: 15},
  textReception: {fontSize: 20, color: '#FFFFFF', marginLeft: 15, letterSpacing: 2},
  textQr: {fontSize: 25, color: '#FFFFFF', letterSpacing: 2, marginVertical: 20, fontWeight: 'bold', textAlign: 'center'},
  background: {height: Dimensions.get('window').height, flex: 1},
  body: {
    backgroundColor: '#F1F1F1',
    fontSize: 15,
    height: 40,
    width: Dimensions.get('window').width * 0.6,
    borderRadius: 30,
  },
  loginText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  loginContainer: {
    width: Dimensions.get('window').width * 0.4,
    height: 35,
    backgroundColor: '#EB2C39',
    borderRadius: 35,
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  switchText: {fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', marginHorizontal: 15},
});
export default Reception;
