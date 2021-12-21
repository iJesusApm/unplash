import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const Body = ({color, title, subtitle, value}) => {
  return (
    <View style={styles.main}>
      <View style={styles.segmentText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.segment}>
        <View style={[styles.circle, {backgroundColor: color}]} elevation={10}>
          <Text style={styles.numberText}>{value}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, flexDirection: 'row', marginHorizontal: '10%'},
  segment: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  segmentText: {flex: 1, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 35},
  title: {color: '#C5C5C5', fontSize: 30, fontWeight: 'bold'},
  subtitle: {color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'},
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').width * 0.32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
export default Body;
