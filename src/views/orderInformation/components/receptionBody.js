/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const ReceptionBody = ({data, location}) => {
  const [expand, setExpand] = useState(false);

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
      <TouchableOpacity style={styles.top} onPress={() => setExpand(!expand)}>
        <Text style={styles.title}>Reception</Text>
      </TouchableOpacity>
      {expand ? (
        <View style={styles.bottom}>
          {data && location ? (
            <>
              <RowData text={'RECEIVES:'} value={data.recieved_user.name} />
              <RowData text={'DATE:'} value={moment(data.recived_date).format('DD-MM-YYYY')} />
              <RowData text={'LOCATION:'} value={location} />
            </>
          ) : (
            <Ionicons name="close-circle-outline" size={30} color={'#EB2C39'} />
          )}
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, alignSelf: 'center', marginVertical: 5},
  top: {backgroundColor: '#1175BA', width: Dimensions.get('screen').width * 0.7, height: 40, borderTopLeftRadius: 5, borderTopRightRadius: 5},
  bottom: {
    backgroundColor: '#E1E1E1',
    width: Dimensions.get('screen').width * 0.7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {color: '#FFFFFF', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontSize: 18},
});
export default ReceptionBody;
