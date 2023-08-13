import {Platform, StyleSheet} from 'react-native';
import {theme} from './index';
import {sizes} from './colors';
export const getShadow = (elevation: number) => {
  return Platform.select({
    ios: {
      zIndex: elevation,
      shadowColor: '#000',
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        width: 1,
        height: 1,
      },
    },
    android: {
      elevation: elevation,
      shadowColor: theme.colors.black,
      shadowOpacity: 1,
      shadowRadius: 5,
      shadowOffset: {
        width: 1,
        height: 1,
      },
    },
  });
};
export const commonStyle = StyleSheet.create({
  contianer: {
    flex: 1,
    margin: sizes.margin,
    marginHorizontal: sizes.margin + 10,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  buttonSquare: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImageStyle: {
    height: 45,
    width: 45,
  },
  button: {
    padding: sizes.margin,
    borderRadius: sizes.radious - 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
});
