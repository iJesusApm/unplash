import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderLogin from './components/header';
import Form from './components/form';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderLogin />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subTitle}>Espwindows Inventory Management Software</Text>
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  title: {
    marginTop: 120,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 5,
    fontSize: 15,
    textAlign: 'center',
    color: '#1175BA',
  },
});
export default Login;
