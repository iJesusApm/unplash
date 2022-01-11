/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState, useReducer, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, Text, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/button';
import Api from '../../../services/Api';

const Form = ({graveyardItem}) => {
  const idUser = AsyncStorage.getItem('id');
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useReducer((prevState, newState) => ({...prevState, ...newState}), {
    graveyard_category_id: '',
    graveyard_color_id: '',
    graveyard_color_glass_id: '',
    categories: [],
    colors: [],
    colorsGlass: [],
  });

  useEffect(() => {
    setState({loading: true});
    getCategories();
    getColors();
    getColorsGlass();
  }, []);

  const getCategories = () => {
    Api.get('graveyard/categories/all')
      .then(res => {
        if (res.status === 200) {
          setState({categories: res.categories});
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getColors = () => {
    Api.get('graveyard/colors/all')
      .then(res => {
        if (res.status === 200) {
          setState({colors: res.colors});
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getColorsGlass = () => {
    Api.get('graveyard/colors-glass/all')
      .then(res => {
        if (res.status === 200) {
          setState({colorsGlass: res.colors_glasses});
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const HandlePress = () => {
    setIsLoading(true);
    const data = {
      code: graveyardItem.code,
      height: graveyardItem.height,
      width: graveyardItem.width,
      production: graveyardItem.production,
      project: graveyardItem.project,
      client: graveyardItem.client,
      mark: graveyardItem.mark,
      system_name: graveyardItem.system_name,
      configuration: graveyardItem.configuration,
      po_number: graveyardItem.po_number,
      isReported: graveyardItem.isReported,
      create_user_id: idUser,
      graveyard_category_id: state.graveyard_category_id,
      graveyard_color_id: state.graveyard_color_id,
      graveyard_color_glass_id: state.graveyard_color_glass_id,
    };
    Api.post('graveyard/create', data)
      .then(async res => {
        if (res) {
          setIsLoading(false);
          navigation.navigate('ConfirmGraveyard', {
            // order: orderItem,
            routeToNavigate: 'Graveyard Entry',
          });
        }
      })
      .catch(err => {
        const message = err.response.data.message ? err.response.data.message : err.response.data.error;
        alert(message);
        setIsLoading(false);
      });
  };

  const Exit = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.main}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.titleInput}>Graveyard Category</Text>
        <View style={styles.body}>
          <Picker
            mode="dropdown"
            selectedValue={state.graveyard_category_id}
            onValueChange={text => setState({graveyard_category_id: text})}
            style={{marginTop: -8}}>
            <Picker.Item label="Select a option" value="None" />
            {state.categories.map(item => (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            ))}
          </Picker>
        </View>
        <Text style={styles.titleInput}>Graveyard Color</Text>
        <View style={styles.body}>
          <Picker
            mode="dropdown"
            selectedValue={state.graveyard_color_id}
            onValueChange={text => setState({graveyard_color_id: text})}
            style={{marginTop: -8}}>
            <Picker.Item label="Select a option" value="None" />
            {state.colors.map(item => (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            ))}
          </Picker>
        </View>
        <Text style={styles.titleInput}>Graveyard Color Glass</Text>
        <View style={styles.body}>
          <Picker
            mode="dropdown"
            selectedValue={state.graveyard_color_glass_id}
            onValueChange={text => setState({graveyard_color_glass_id: text})}
            style={{marginTop: -8}}>
            <Picker.Item label="Select a option" value="None" />
            {state.colorsGlass.map(item => (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            ))}
          </Picker>
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={'#EB2C39'} style={styles.isLoading} />
      ) : (
        <View style={{flexDirection: 'row', marginBottom: 5}}>
          <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Exit} text={'Go back'} />
          <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={HandlePress} text={'Confirm'} />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {marginHorizontal: '8%', marginTop: 20},
  body: {
    backgroundColor: '#E1E1E1',
    fontSize: 16,
    marginVertical: 10,
    height: 35,
    width: Dimensions.get('screen').width * 0.7,
    borderRadius: 30,
  },
  lblButton: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  containButton: {
    width: 150,
    height: 35,
    backgroundColor: '#EB2C39',
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
  titleInput: {fontSize: 17, color: '#005386', fontWeight: 'bold'},
});
export default Form;
