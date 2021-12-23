/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import moment from 'moment';
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/button';
import Api from '../../../services/Api';

import SignatureCapture from 'react-native-signature-capture';

const SystemBody = ({itemId, itemOrder}) => {
  const navigation = useNavigation();
  const uuid = itemId;
  const [isLoading, setIsLoading] = useState(false);
  const [signature, setSignature] = useState('');
  const sign = useRef();

  const HandlePress = () => {
    setIsLoading(true);
    const item = {
      signature: signature.trim(),
      dispatch_date: moment(new Date()).format('YYYY-MM-DD'),
    };
    Api.post(`dispatch/order/${uuid}`, item)
      .then(async res => {
        if (res) {
          setIsLoading(false);
          navigation.navigate('ConfirmOrder', {
            order: itemOrder,
          });
        }
      })
      .catch(err => {
        const message = err.response.data.message ? err.response.data.message : err.response.data.error;
        alert(message);
        setIsLoading(false);
      });
  };

  const saveSign = () => {
    sign.saveImage();
  };

  const resetSign = () => {
    sign.resetImage();
  };

  const _onSaveEvent = result => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  };
  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Add your signature</Text>
      <SignatureCapture
        style={styles.signature}
        ref={sign}
        onSaveEvent={_onSaveEvent}
        onDragEvent={_onDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        backgroundColor="#1175BA"
        strokeColor="#ffffff"
        minStrokeWidth={4}
        maxStrokeWidth={4}
        viewMode={'portrait'}
      />

      {isLoading ? (
        <ActivityIndicator size="large" color={'#EB2C39'} style={styles.isLoading} />
      ) : (
        <View style={{flexDirection: 'row', flex: 0.3}}>
          <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={resetSign} text={'Reset'} />
          <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={saveSign} text={'Confirm'} />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, alignSelf: 'center'},
  top: {
    backgroundColor: '#1175BA',
    width: Dimensions.get('screen').width,
    height: '75%',
  },
  title: {color: '#000000', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', fontSize: 18},
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
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});
export default SystemBody;
