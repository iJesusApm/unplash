import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

const Header = ({fullname, picture}) => {
  return (
    <View style={styles.profile}>
      <Avatar
        rounded
        source={{
          uri: picture,
        }}
        size="medium"
      />
      <View style={styles.profileText}>
        <Text style={styles.profileName}>{fullname}</Text>
        <Text style={styles.description}>View Profile</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
    color: 'white',
    textTransform: 'capitalize',
    fontFamily: 'Museo Sans',
    fontSize: 16,
  },
  profileGoTo: {
    color: 'white',
    textTransform: 'capitalize',
    fontFamily: 'Museo Sans',
    fontSize: 14,
  },
});

export default Header;
