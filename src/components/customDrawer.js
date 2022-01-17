import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {List} from 'react-native-paper';
import HeaderMenu from './headerMenu';

const CustomDrawer = props => {
  const navigation = useNavigation();

  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.push('Login');
  };

  const HandleClick = item => {
    navigation.push('Home', {screen: item});
  };

  const iconProps = {
    size: 22,
    color: '#FFF',
  };

  return (
    <View style={styles.main}>
      <HeaderMenu />
      <ImageBackground source={require('../assets/resources/background-menu.png')} style={styles.background}>
        <DrawerContentScrollView {...props}>
          <TouchableOpacity onPress={() => HandleClick('Dashboard')}>
            <View style={styles.row}>
              <Ionicons name="home-outline" size={iconProps.size} color={iconProps.color} />
              <Text style={styles.textItem}>Dashboard</Text>
            </View>
          </TouchableOpacity>
          <List.Section>
            <List.Accordion
              theme={{colors: {text: '#FFF'}}}
              descriptionNumberOfLines={0}
              titleStyle={styles.textAccordionTitle}
              style={styles.rowAccordion}
              title="Reception"
              left={() => <Ionicons name="cube" size={iconProps.size} color={iconProps.color} />}>
              <List.Item titleStyle={styles.textSubitem} title="Partial" onPress={() => HandleClick('Reception')} />
              <List.Item titleStyle={styles.textSubitem} title="Total" onPress={() => HandleClick('Total Reception')} />
            </List.Accordion>
            <List.Accordion
              theme={{colors: {text: '#FFF'}}}
              descriptionNumberOfLines={0}
              titleStyle={styles.textAccordionTitle}
              style={styles.rowAccordion}
              title="Dispatch"
              left={() => <Ionicons name="car-outline" size={iconProps.size} color={iconProps.color} />}>
              <List.Item titleStyle={styles.textSubitem} title="Partial" onPress={() => HandleClick('Dispatch')} />
              <List.Item titleStyle={styles.textSubitem} title="Total" onPress={() => HandleClick('Dispatch')} />
            </List.Accordion>
            <List.Accordion
              theme={{colors: {text: '#FFF'}}}
              descriptionNumberOfLines={0}
              titleStyle={styles.textAccordionTitle}
              style={styles.rowAccordion}
              title="Graveyard"
              left={() => <Ionicons name="pricetag-outline" size={iconProps.size} color={iconProps.color} />}>
              <List.Item titleStyle={styles.textSubitem} title="Entry" onPress={() => HandleClick('Graveyard Entry')} />
              <List.Item titleStyle={styles.textSubitem} title="Dispatch" onPress={() => HandleClick('Graveyard Dispatch')} />
            </List.Accordion>
          </List.Section>
          <TouchableOpacity onPress={() => HandleClick('Search')}>
            <View style={styles.row}>
              <Ionicons name="search" size={iconProps.size} color={iconProps.color} />
              <Text style={styles.textItem}>Search</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => HandleClick('Client')}>
            <View style={styles.row}>
              <Ionicons name="person" size={iconProps.size} color={iconProps.color} />
              <Text style={styles.textItem}>Client</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Logout}>
            <View style={styles.row}>
              <Ionicons name="exit-outline" size={22} color={'#FFFFFF'} />
              <Text style={styles.textItem}>Logout</Text>
            </View>
          </TouchableOpacity>
        </DrawerContentScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, marginTop: 120},
  row: {flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingVertical: 15, backgroundColor: '#005487'},
  textItem: {fontSize: 20, color: '#FFFFFF', marginLeft: 15},
  background: {flex: 1},
  textSubitem: {fontSize: 20, color: '#FFFFFF'},
  rowAccordion: {flexDirection: 'row', alignItems: 'center', paddingLeft: 20, backgroundColor: '#005487'},
  textAccordionTitle: {fontSize: 20, color: '#FFFFFF', marginLeft: 5},
});
export default CustomDrawer;
