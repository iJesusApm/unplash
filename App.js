import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {AppNavigation} from './src/navigator/AppNavigation';
import SplashScreen from './src/views/splashScreen/index';
import Login from './src/views/login';

const App = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <Login />
    // <NavigationContainer>
    //   <AppNavigation />
    // </NavigationContainer>
  );
};
export default App;
