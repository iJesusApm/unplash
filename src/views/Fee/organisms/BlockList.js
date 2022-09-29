import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import Block from '../component/Block';
import {PostContext} from '../../../hooks/useFetchPost';
import Header from '../component/Header';

const BlockList = () => {
  const posts = useContext(PostContext);
  return (
    <FlatList
      data={posts}
      renderItem={({item, index}) => <Block post={item} index={index} />}
      ListHeaderComponent={<Header />}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

export default BlockList;
