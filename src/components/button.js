import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({titleStyle, touchStyle, action, text}) => {
  return (
    <>
      <TouchableOpacity onPress={action}>
        <LinearGradient colors={['#20B8DF', '#1175BA']} style={touchStyle} start={{y: 0.0, x: 0.0}} end={{y: 0.0, x: 1.0}}>
          <Text style={titleStyle}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default Button;
