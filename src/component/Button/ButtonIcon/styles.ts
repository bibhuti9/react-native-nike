import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/index';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: theme.colors.black,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
