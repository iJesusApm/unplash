import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Block = props => {
  const {urls, likes} = props.post;
  const secondColum = Number(props.index) % 2 === 0;
  return (
    <View style={[styles.content, !secondColum && styles.margin]}>
      <View>
        <Image
          source={{
            uri: urls.regular,
          }}
          style={styles.image}
        />
        <LinearGradient colors={['#000000', '#000000b3']} style={styles.overlay}>
          <Text style={styles.likes}>{likes} votos</Text>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    width: '50%',
    alignSelf: 'center',
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
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
  likes: {color: '#fff', fontSize: 12, marginLeft: 12, fontFamily: 'Museo Sans', marginTop: 24},
  margin: {marginTop: 26},
});
export default Block;
