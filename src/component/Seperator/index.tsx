import {View, ViewStyle} from 'react-native';
import {styles} from './styles';
import React from 'react';

interface PropsType {
  width?: string;
  style?: ViewStyle;
}

export default function Seperator({width = '100%', style}: PropsType) {
  return <View style={[styles.container, {width, ...style}]}></View>;
}
