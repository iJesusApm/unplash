import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Button = ({titleStyle, touchStyle, action, text}) => {
  return (
    <View elevation={10}>
      <TouchableOpacity onPress={action} style={touchStyle}>
        <Text style={titleStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
