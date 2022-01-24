/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccesoriesList from './accesoriesList';

const AccesoriesBody = ({data}) => {
  const [expand, setExpand] = useState(false);
  const flatListSeparator = () => <View style={styles.separator} />;

  const systems = data.items_to_recive ? data.items_to_recive : [];

  const HeaderList = () => (
    <View style={styles.mainHeader}>
      <Text style={{...styles.label, width: '15%'}}>System</Text>
      <Text style={{...styles.label, width: '45%'}}>Finish</Text>
      <Text style={{...styles.label, width: '10%'}}>Mark</Text>
      <Text style={{...styles.label, width: '20%'}}>Dimensions</Text>
    </View>
  );

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.top} onPress={() => setExpand(!expand)}>
        <Text style={styles.title}>{data.type}</Text>
      </TouchableOpacity>
      {expand ? (
        <View style={styles.bottom}>
          {systems.length > 0 ? (
            <>
              <FlatList
                data={systems}
                renderItem={({item}) => <AccesoriesList item={item} />}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={flatListSeparator}
                ListHeaderComponent={<HeaderList />}
              />
            </>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Ionicons name="close-circle-outline" size={30} color={'#EB2C39'} />
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>All items are recived</Text>
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, alignSelf: 'center', marginVertical: 5},
  top: {backgroundColor: '#1175BA', width: Dimensions.get('screen').width * 0.98, height: 40, borderTopLeftRadius: 5, borderTopRightRadius: 5},
  bottom: {
    backgroundColor: '#E1E1E1',
    width: Dimensions.get('screen').width * 0.98,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {color: '#FFFFFF', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontSize: 18},
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#1175BA',
  },
  label: {
    marginHorizontal: '1%',
    margin: 2,
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  mainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default AccesoriesBody;
