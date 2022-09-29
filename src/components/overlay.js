import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Overlay = ({gradientStyle, children}) => {
  return (
    <>
      <LinearGradient colors={['#000000b3', '#000000']} style={gradientStyle}>
        {children}
      </LinearGradient>
    </>
  );
};
export default Overlay;
