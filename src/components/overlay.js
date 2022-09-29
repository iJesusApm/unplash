import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Overlay = ({gradientStyle, children}) => {
  return (
    <Animatable.View animation="fadeInUp" delay={700} duration={350}>
      <LinearGradient colors={['#000000b3', '#000000']} style={gradientStyle}>
        {children}
      </LinearGradient>
    </Animatable.View>
  );
};
export default Overlay;
