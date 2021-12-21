import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Body = ({title, check}) => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.bottom}>{check ? <Ionicons name="checkmark" size={30} color={'#1175BA'} /> : null}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, alignSelf: 'center'},
  top: {backgroundColor: '#1175BA', width: 240, height: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20},
  bottom: {
    backgroundColor: '#E1E1E1',
    width: 240,
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {color: '#FFFFFF', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontSize: 18},
});
export default Body;
