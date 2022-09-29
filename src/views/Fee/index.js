import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PostContextProvider} from '../../hooks/useFetchPost';

import BlockList from './organisms/BlockList';

const Fee = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <PostContextProvider>
        <BlockList />
      </PostContextProvider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#FFFFFF', marginHorizontal: 13},
});
export default Fee;
