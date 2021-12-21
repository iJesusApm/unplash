import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './src/navigator/AppNavigation';
import SplashScreen from './src/views/splashScreen/index';

const App = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setisLoading(false);
    }, 3000);
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
export default App;
