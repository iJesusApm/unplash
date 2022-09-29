import React, {createContext, useState, useEffect} from 'react';
import {unsplash} from '../services/api';

// create context
const PostContext = createContext();

const PostContextProvider = ({children}) => {
  // the value that will be given to the context
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = () => {
      unsplash.photos
        .getRandom({
          count: 10,
          featured: true,
        })
        .then(result => {
          if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
          } else {
            const feed = result.response;
            setPosts(feed);
          }
        });
    };

    fetchPosts();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <PostContext.Provider value={posts}>{children}</PostContext.Provider>
  );
};

export {PostContext, PostContextProvider};
