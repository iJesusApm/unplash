import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({titleStyle, touchStyle, action, text}) => {
  return (
    <>
      <TouchableOpacity onPress={action} style={touchStyle}>
        <Text style={titleStyle}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
