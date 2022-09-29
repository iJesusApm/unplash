import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Overlay from './overlay';

const Block = props => {
  const {urls, likes} = props.post;
  const secondColum = Number(props.index) % 2 === 0;
  const animationType = secondColum ? 'fadeInLeft' : 'fadeInRight';
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Post', {
      post: props.post,
      index: props.index,
    });
  };

  return (
    <Animatable.View
      animation={animationType}
      delay={700}
      duration={350}
      style={[styles.content, !secondColum && styles.margin]}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            uri: urls.regular,
          }}
          style={styles.image}
        />
        <Overlay gradientStyle={styles.overlay}>
          <Text style={styles.title}>Lorem ipsum</Text>
          <Text style={styles.subTitle}>{likes} votos</Text>
        </Overlay>
      </TouchableOpacity>
    </Animatable.View>
  );
};
const styles = StyleSheet.create({
  content: {
    width: '50%',
    alignSelf: 'center',
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  margin: {marginTop: 26},
  image: {
    width: 160,
    height: 220,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    width: 160,
    height: 60,
    bottom: 0,
    border: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 12,
    fontFamily: 'Museo Sans',
    marginTop: 16,
  },
  subTitle: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 12,
    fontFamily: 'Museo Sans',
    marginTop: 5,
  },
});
export default Block;
