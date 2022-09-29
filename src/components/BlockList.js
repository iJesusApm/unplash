import React from 'react';
import {FlatList} from 'react-native';
import Block from './Block';

const BlockList = props => {
  return (
    <FlatList
      data={props.items}
      renderItem={({item, index}) => <Block post={item} index={index} />}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

export default BlockList;
