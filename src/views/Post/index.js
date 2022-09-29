import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-elements';

import Overlay from '../../components/overlay';

const Post = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {post, index} = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  const goToProfile = () => {
    navigation.navigate('Profile', {
      user: post.user,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: post.urls.regular,
          }}
          style={styles.image}
        />
        <Overlay gradientStyle={styles.overlay}>
          <Text style={styles.title}>Lorem ipsum</Text>
          <Text style={styles.subtitle}>{post.likes} votos</Text>
          <View style={styles.profile}>
            <Avatar
              rounded
              source={{
                uri: post.user.profile_image.medium,
              }}
              size="medium"
            />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>{post.user.name}</Text>
              <TouchableOpacity onPress={goToProfile}>
                <Text style={styles.profileGoTo}>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
      </View>
      <TouchableOpacity onPress={goBack} style={styles.backBtn}>
        <Ionicons name={'close-circle-outline'} size={50} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  overlay: {
    position: 'absolute',
    width: '100%',
    height: 270,
    bottom: 0,
  },
  image: {
    aspectRatio: 1 / 1,
    height: '100%',
  },
  backBtn: {
    position: 'absolute',
    left: 25,
    top: 60,
  },
  title: {
    color: '#fff',
    fontSize: 42,
    marginLeft: 26,
    fontFamily: 'Museo Sans',
    marginTop: 32,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 26,
    fontFamily: 'Museo Sans',
    marginTop: 10,
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

export default Post;
