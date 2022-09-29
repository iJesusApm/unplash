import React, {useContext} from 'react';
import {PostContext} from '../../../hooks/useFetchPost';
import Header from '../component/Header';
import BlockList from '../../../components/BlockList';

const FeedList = () => {
  const posts = useContext(PostContext);
  return (
    <>
      <Header />
      <BlockList items={posts} />
    </>
  );
};

export default FeedList;
