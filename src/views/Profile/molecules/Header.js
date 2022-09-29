import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

const Header = ({fullName, picture, bio}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Avatar
          rounded
          source={{
            uri: picture,
          }}
          size="medium"
        />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>{fullName}</Text>
          <Text style={styles.description}>{bio ?? 'Lorem ipsum'}</Text>
        </View>
      </View>
      <Text style={styles.title}>My Photos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 100,
  },
  profile: {
    marginLeft: 26,
    marginTop: 26,
    flexDirection: 'row',
  },
  profileText: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'space-around',
  },
  profileName: {
    color: '#000',
    textTransform: 'capitalize',
    fontFamily: 'Museo Sans',
    fontSize: 22,
  },
  description: {
    color: '#000',
    textTransform: 'capitalize',
    fontFamily: 'Museo Sans',
    fontSize: 14,
    marginTop: 4,
  },
  title: {
    fontFamily: 'Museo Sans',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 42,
    letterSpacing: 0,
    marginTop: 40,
    marginHorizontal: 26,
  },
});

export default Header;
