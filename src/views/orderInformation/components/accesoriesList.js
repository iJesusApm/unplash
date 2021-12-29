/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AccesoriesList = ({item}) => {
  return (
    <View style={styles.main}>
      <Text style={{...styles.label, width: '15%'}}>{item.system}</Text>
      <Text style={{...styles.label, width: '45%'}}>{item.finish}</Text>
      <Text style={{...styles.label, width: '10%'}}>{item.mark}</Text>
      <Text style={{...styles.label, width: '20%'}}>{item.dimensions}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginHorizontal: '1%',
    margin: 2,
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
export default AccesoriesList;
