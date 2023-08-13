import {Text, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {theme} from '../../../theme/index';
import DefaultIcon from '../../DefaultIcon/index';
interface propsTypes {
  iconName?: string;
  title?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  iconStyle?: TextStyle;
  iconProps?: any;
  onAction?: () => void;
  iconColor?: string;
  disabled?: boolean;
  children?;
}

export default function ButtonIcon({
  iconName,
  title,
  textStyle,
  containerStyle,
  iconStyle,
  iconProps,
  onAction,
  iconColor = theme.colors.grey1,
  disabled = false,
  children,
}: propsTypes) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, containerStyle]}
      onPress={onAction}>
      {iconName && (
        <DefaultIcon
          iconName={iconName}
          style={iconStyle}
          color={iconColor}
          {...iconProps}
        />
      )}
      {title && <Text style={[styles.textStyle, {...textStyle}]}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
}
