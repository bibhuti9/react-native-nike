import {View, Text} from 'react-native';
import React from 'react';
import {PropsTypes} from './types';
import {Icon} from '@rneui/themed';
export default function DefaultIcon({
  iconName,
  type = 'ionicon',
  style,
  onPress,
  color,
  size,
  ...other
}: PropsTypes) {
  return (
    <Icon
      {...other}
      style={style}
      name={iconName}
      color={color}
      size={size}
      type={type}
    />
  );
}
