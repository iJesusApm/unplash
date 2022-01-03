import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from './button';

const AlreadyText = ({text}) => {
  const navigation = useNavigation();
  const Exit = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <Text style={styles.fontStyle}>{text}</Text>
      <Button titleStyle={styles.lblButton} touchStyle={styles.containButton} action={Exit} text={'Go back'} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  fontStyle: {color: 'red', textAlign: 'center', marginTop: 25, fontSize: 15, fontWeight: 'bold'},
  lblButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  containButton: {
    width: Dimensions.get('window').width * 0.3,
    height: 35,
    backgroundColor: '#005386',
    borderRadius: 35,
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
export default AlreadyText;
