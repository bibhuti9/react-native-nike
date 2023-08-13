import {TextStyle} from 'react-native';

export enum HeadingType {
  Heading1 = 1,
  Heading2 = 2,
  Heading3 = 3,
  Heading4 = 4,
}
export interface PropsTypes {
  type: number;
  other?: object;
  style?: TextStyle;
  title: string | number;
}
