import {TextStyle} from 'react-native';

export interface PropsTypes {
  iconName: string | undefined;
  color?: string;
  size?: number;
  type?: string;
  style?: TextStyle;
  onPress?: () => void;
  other?: object;
}
