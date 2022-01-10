/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SystemBody = ({data}) => {
  const RowData = ({text, value}) => {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <View style={{flex: 4}}>
          <Text style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{text}</Text>
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
        <Text style={styles.title}>System</Text>
      </View>
      <View style={styles.bottom}>
        {data ? (
          <>
            <RowData text={'code:'} value={data.code} />
            <RowData text={'height:'} value={data.height} />
            <RowData text={'width:'} value={data.width} />
            <RowData text={'production:'} value={data.production} />
            <RowData text={'project:'} value={data.project} />
            <RowData text={'client:'} value={data.client} />
            <RowData text={'mark:'} value={data.mark} />
            <RowData text={'system_name:'} value={data.system_name} />
            <RowData text={'configuration:'} value={data.configuration} />
            <RowData text={'po_number:'} value={data.po_number} />
            {/* <RowData text={'isReported:'} value={data.isReported} /> */}
          </>
        ) : (
          <Ionicons name="close-circle-outline" size={30} color={'#EB2C39'} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, alignSelf: 'center'},
  top: {backgroundColor: '#1175BA', width: Dimensions.get('screen').width * 0.98, height: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20},
  bottom: {
    backgroundColor: '#E1E1E1',
    width: Dimensions.get('screen').width * 0.98,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  title: {color: '#FFFFFF', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontSize: 18},
});
export default SystemBody;
