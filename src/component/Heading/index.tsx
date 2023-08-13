import {Text} from 'react-native';
import React from 'react';
import {HeadingType, PropsTypes} from './types';
import {typography} from '../../theme/typography';

export const headingStyle = (type: number) => {
  switch (type) {
    case HeadingType.Heading1:
      return typography.heading1;
    case HeadingType.Heading2:
      return typography.heading2;
    case HeadingType.Heading3:
      return typography.heading3;
    case HeadingType.Heading4:
      return typography.heading4;
  }
};

export function Heading({
  type,
  title,
  style,
  ...other
}: PropsTypes): JSX.Element {
  return (
    <Text style={[headingStyle(type), {...style}]} {...other}>
      {title}
    </Text>
  );
}
