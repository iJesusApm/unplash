/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Body = ({title, data}) => {
  console.log('data:', data);

  const RowData = ({text, value}) => {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <View style={{flex: 4}}>
          <Text style={{fontWeight: 'bold'}}>{text}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>{value}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.bottom}>
        <RowData text={'SYSTEM:'} value={data.system} />
        <RowData text={'FINISH:'} value={data.finish} />
        <RowData text={'MARK:'} value={data.mark} />
        <RowData text={'DIMENSIONS:'} value={data.dimensions} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, alignSelf: 'center'},
  top: {backgroundColor: '#1175BA', width: 240, height: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20},
  bottom: {
    backgroundColor: '#E1E1E1',
    width: 240,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {color: '#FFFFFF', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontSize: 18},
});
export default Body;
