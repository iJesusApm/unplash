import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {PostContextProvider} from '../../hooks/useFetchPost';

import Template from './organisms/Template';

const Profile = () => {
  const route = useRoute();
  const {user} = route.params;
  console.log(user);
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <PostContextProvider>
        <Template user={user} />
      </PostContextProvider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#FFFFFF', marginHorizontal: 13},
});
export default Profile;
