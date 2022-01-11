/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState, useReducer, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, Text, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/button';
import Api from '../../../services/Api';

const Form = ({}) => {
  const idUser = AsyncStorage.getItem('id');
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useReducer((prevState, newState) => ({...prevState, ...newState}), {
    code: '',
    height: '',
    width: '',
    production: '',
    project: '',
    client: '',
    mark: '',
    system_name: '',
    configuration: '',
    po_number: '',
    isReported: false,
    graveyard_category_id: '',
    graveyard_color_id: '',
    graveyard_color_glass_id: '',
    categories: [],
    colors: [],
    colorsGlass: [],
  });

  const inputTheme = {
    colors: {primary: '#005386', underlineColor: 'transparent'},
    roundness: 30,
  };

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
    const item = {
      code: state.code,
      height: state.height,
      width: state.width,
      production: state.production,
      project: state.project,
      client: state.client,
      mark: state.mark,
      system_name: state.system_name,
      configuration: state.configuration,
      po_number: state.po_number,
      isReported: state.isReported,
      create_user_id: idUser._j,
      graveyard_category_id: state.graveyard_category_id,
      graveyard_color_id: state.graveyard_color_id,
      graveyard_color_glass_id: state.graveyard_color_glass_id,
    };
    Api.post('graveyard/create', item)
      .then(async res => {
        if (res) {
          setIsLoading(false);
          navigation.navigate('ConfirmGraveyard', {
            graveyard: res.graveyard,
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
        <Text style={styles.titleInput}>Code</Text>
        <TextInput
          placeholder="Code"
          value={state.code}
          onChangeText={text => setState({code: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>Height</Text>
        <TextInput
          placeholder="Height"
          value={state.height}
          onChangeText={text => setState({height: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>Width</Text>
        <TextInput
          placeholder="Width"
          value={state.width}
          onChangeText={text => setState({width: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>Production</Text>
        <TextInput
          placeholder="Production"
          value={state.production}
          onChangeText={text => setState({production: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>Project</Text>
        <TextInput
          placeholder="Project"
          value={state.project}
          onChangeText={text => setState({project: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>Client</Text>
        <TextInput
          placeholder="Client"
          value={state.client}
          onChangeText={text => setState({client: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>Mark</Text>
        <TextInput
          placeholder="Mark"
          value={state.mark}
          onChangeText={text => setState({mark: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>System Name</Text>
        <TextInput
          placeholder="System Name"
          value={state.system_name}
          onChangeText={text => setState({system_name: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>Configuration</Text>
        <TextInput
          placeholder="Configuration"
          value={state.configuration}
          onChangeText={text => setState({configuration: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>PO Number</Text>
        <TextInput
          placeholder="PO Number"
          value={state.po_number}
          onChangeText={text => setState({po_number: text})}
          style={styles.body}
          theme={inputTheme}
          underlineColor="transparent"
          maxLength={76}
        />
        <Text style={styles.titleInput}>isReported</Text>
        <View style={styles.body}>
          <Picker mode="dropdown" selectedValue={state.isReported} onValueChange={val => setState({isReported: val})} style={{marginTop: -8}}>
            <Picker.Item label="Select a option" value={''} />
            <Picker.Item label="Yes" value={true} />
            <Picker.Item label="No" value={false} />
          </Picker>
        </View>
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
        <Text style={styles.titleInput}>Frame Color</Text>
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
        <Text style={styles.titleInput}>Glass Color</Text>
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
