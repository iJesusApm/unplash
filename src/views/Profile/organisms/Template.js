import React, {useContext} from 'react';
import {PostContext} from '../../../hooks/useFetchPost';
import Header from '../molecules/Header';
import BlockList from '../../../components/BlockList';

const Template = ({user}) => {
  // const posts = useContext(PostContext);
  return (
    <>
      <Header fullName={`${user.first_name} ${user.last_name}`} picture={user.profile_image.medium} />
      {/* <BlockList items={posts} /> */}
    </>
  );
};

export default Template;
