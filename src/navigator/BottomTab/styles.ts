import {StyleSheet} from 'react-native';
import {sizes} from '../../theme/colors';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.black,
    alignItems: 'center',
  },
  button: {
    padding: sizes.padding,
    paddingTop: sizes.margin + 10,
  },
  badgeContainer: {
    position: 'absolute',
    right: 5,
    top: 10,
  },
  badge: {
    color: theme.colors.primary,
    fontSize: sizes.M,
  },
});
