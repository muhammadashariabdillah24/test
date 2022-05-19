import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({
  styleContainer,
  styleButton,
  textButton,
  onPress,
  type,
  iconName,
  iconSize,
  iconColor,
}) => {
  return (
    <TouchableOpacity style={styleContainer} onPress={onPress}>
      {type === 'icon' ? (
        <Icon name={iconName} size={iconSize} color={iconColor} />
      ) : (
        <Text style={styleButton}>{textButton}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
