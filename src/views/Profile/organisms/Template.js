import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {UserContext} from '../../../hooks/useFetchUser';
import Header from '../molecules/Header';
import BlockList from '../../../components/BlockList';

const Template = ({user}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const posts = useContext(UserContext);
  return (
    <ScrollView style={styles.container}>
      <Header fullName={user.name} picture={user.profile_image.medium} bio={user.bio} />
      <BlockList items={posts} />
      <TouchableOpacity onPress={goBack} style={styles.backBtn}>
        <Ionicons name={'close-circle-outline'} size={50} color={'black'} />
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    position: 'absolute',
    left: 25,
    top: 60,
  },
});

export default Template;
