/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useReducer} from 'react';
import {View, StyleSheet, ImageBackground, StatusBar, ActivityIndicator, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Api from '../../services/Api';

import HeaderWhite from '../../components/headerWhite';
import Body from './components/body';

const Dashboard = () => {
  const [state, setState] = useReducer((prevState, newState) => ({...prevState, ...newState}), {
    order_for_recieved: 0,
    orders_ready_to_dispatch: 0,
    orders_delayed_not_dispatched: 0,
    loading: true,
  });

  useEffect(() => {
    setState({loading: true});
    Api.get('dashboard/stats')
      .then(res => {
        if (res.status === 200) {
          setState({
            order_for_recieved: res.stats.order_for_recieved,
            orders_ready_to_dispatch: res.stats.orders_ready_to_dispatch,
            orders_delayed_not_dispatched: res.stats.orders_delayed_not_dispatched,
            loading: false,
          });
        }
      })
      .catch(err => {
        setState({loading: false});
      });
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <HeaderWhite />
      <ImageBackground source={require('../../assets/resources/background.png')} style={styles.background}>
        {state.loading ? (
          <ActivityIndicator size="large" color={'#FFFFFF'} style={styles.isLoading} />
        ) : (
          <View style={{flex: 0.8}}>
            <Body title={'N° Orders'} subtitle={'for recieved'} value={state.order_for_recieved} />
            <Body title={'Orders'} subtitle={'ready to dispatch'} value={state.orders_ready_to_dispatch} />
            <Body title={'Orders'} subtitle={'delayed not dispatched'} value={state.orders_delayed_not_dispatched} />
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#FFFFFF', marginRight: '0.1%'},
  background: {height: Dimensions.get('window').height},
  isLoading: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
export default Dashboard;
