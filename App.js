import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {AppNavigation} from './src/navigator/AppNavigation';
import SplashScreen from './src/views/splashScreen/index';

const App = () => {
  // const [isLoading, setisLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setisLoading(false);
  //   }, 7000);
  // }, []);

  // if (isLoading) {
  //   return <SplashScreen />;
  // }
  return (
    <SplashScreen />
    // <NavigationContainer>
    //   <AppNavigation />
    // </NavigationContainer>
  );
};
export default App;
