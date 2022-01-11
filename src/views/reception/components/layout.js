/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Api from '../../../services/Api';

const Layout = ({isEnabled}) => {
  const navigation = useNavigation();

  const onSuccess = e => {
    if (isEnabled) {
      if (e.data) {
        Api.get(`qr/${e.data}/accessories`)
          .then(res => {
            if (res.status === 200) {
              let acum = 0;
              res.order.orders.map(item => {
                if (item.accesories.length > 0 && item.accesories) {
                  item.accesories.map(c => {
                    if (c.items.length > 0 && c.items) {
                      c.items.map(e => {
                        if (e.count_ordered) {
                          acum += parseInt(e.count_ordered);
                        }
                      });
                    }
                  });
                }
              });
              navigation.navigate('AccesoriesReception', {
                order: res.order,
                itemId: res.order.orders[0] ? res.order.orders[0].id : res.order.id,
                total: acum,
              });
            } else {
              alert(`${res.messaje}`);
            }
          })
          .catch(() => {
            alert('An error has occurred. QR code no valid.');
          });
      }
    } else {
      if (e.data) {
        Api.get(`qr/${e.data}`)
          .then(res => {
            if (res.status === 200) {
              navigation.navigate('Order', {
                order: res.item,
                item: res.item.id,
                fromReception: true,
                total: res.item.count_ordered,
              });
            } else {
              alert(`${res.messaje}`);
            }
          })
          .catch(() => {
            alert('An error has occurred. QR code no valid.');
          });
      }
    }
  };
  return <QRCodeScanner onRead={onSuccess} reactivate={true} reactivateTimeout={5000} showMarker={true} cameraStyle={styles.camera} />;
};

const styles = StyleSheet.create({
  camera: {width: Dimensions.get('screen').width * 0.3, height: Dimensions.get('screen').height * 0.42, alignSelf: 'center'},
});

export default Layout;
