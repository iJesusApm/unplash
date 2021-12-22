/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Api from '../../../services/Api';

const Layout = () => {
  const onSuccess = e => {
    if (e.data) {
      Api.get(`qr/${e.data}`)
        .then(res => {
          console.log(res);
        })
        .catch(() => {
          alert('An error has occurred. QR code no valid.');
        });
    }
  };
  return <QRCodeScanner onRead={onSuccess} reactivate={true} reactivateTimeout={5000} showMarker={true} cameraStyle={styles.camera} />;
};

const styles = StyleSheet.create({
  camera: {width: Dimensions.get('screen').width * 0.3, height: Dimensions.get('screen').height * 0.42, alignSelf: 'center'},
});

export default Layout;
