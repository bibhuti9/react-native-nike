import {Dimensions} from 'react-native';
import {Colors} from '@rneui/themed';
const {width, height} = Dimensions.get('screen');

export interface ThemeColors extends Colors {
  primary: string;
  secondary: string;
  grey: string;
  searchBg: string;
  success: string;
  error: string;
  warning: string;
}

const baseColors = {
  primary: '#70D3CD',
  secondary: '#EDB66E',
  success: '#4DB740', //70C04F
  error: '#EE786F', //FF0000
  warning: '#EC8A00',
  grey: '#F5F9FF',
  searchBg: '#9B9B9B',
};

export const colors = {
  ...baseColors,

  primary: '#70D3CD',
  primaryLight1: '#03c1a2',
  primaryLight2: '#A2EAE6',
  primaryLight3: '#F9F5F6',

  primaryDark: '#03c1a2',
  primaryLight: '#A2EAE6',
  background: '#fff',
  secondary: '#86A3B8',
  secondaryLight: '#c5ddf0',
  gray: '#8795a1',
  grey0: '#C4C4C4',
  grey1: '#707070',
  grey2: '#9B9B9B',
  grey3: '#F5F6F8',
  grey4: '#FCFDFF',
  grey5: '#BFBFBF',
  greyLight: '#d9d7d7',
  greyOutline: '#E2E2E2',
  disabled: '#9B9B9B',
  divider: '#9B9B9B',
  searchBg: '#9B9B9B',
  black: '#000',
  white: '#fff',
  platform: {
    android: baseColors,
    ios: baseColors,
    web: baseColors,
    default: baseColors,
  },
};

export const sizes = {
  padding: 10,
  margin: 10,
  radious: 10,
  XL: 22,
  L: 19,
  M: 18,
  S: 15,
  SM: 13,
  SMM: 11,
  width,
  height,
  bold: 'bold',
  bold1: '900',
  bold2: '700',
  bold3: '500',
  bold4: 'normal',
  space1: 10,
  space2: 15,
  space3: 20,
  iconSize: 30,
};
export const fonts = {
  common: 'Poppins-Regular',
  common1: 'JosefinSans-Medium',
  common2: 'KaushanScript-Regular',
  common3: 'Quicksand-Medium',
  common4: 'Roboto-Medium',
  common5: 'JosefinSans-ExtraLight',
};
