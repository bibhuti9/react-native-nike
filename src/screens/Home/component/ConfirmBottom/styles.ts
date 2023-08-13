import {StyleSheet} from 'react-native';

import {theme} from 'src/theme';
import {sizes} from 'src/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: sizes.margin,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: sizes.margin + 5,
    borderRadius: sizes.radious,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: sizes.padding,
    marginHorizontal: sizes.margin,
  },
});
