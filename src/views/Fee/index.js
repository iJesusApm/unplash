import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PostContextProvider} from '../../hooks/useFetchPost';

import FeedList from './organisms/FeedList';

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <PostContextProvider>
        <FeedList />
      </PostContextProvider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#FFFFFF', marginHorizontal: 13},
});
export default Home;
