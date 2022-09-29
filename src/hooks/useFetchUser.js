import React, {createContext, useState, useEffect} from 'react';
import {unsplash} from '../services/api';

// create context
const UserContext = createContext();

const UserContextProvider = ({children, username}) => {
  // the value that will be given to the context
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = () => {
      unsplash.users
        .getPhotos({
          count: 10,
          featured: true,
          username: username,
        })
        .then(result => {
          if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
          } else {
            const feed = result.response;
            setPosts(feed.results);
          }
        });
    };

    fetchPosts();
  }, [username]);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={posts}>{children}</UserContext.Provider>
  );
};

export {UserContext, UserContextProvider};
