import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
});
export default Profile;
