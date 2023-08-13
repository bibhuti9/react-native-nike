import {StyleSheet} from 'react-native';
import {theme} from 'src/theme';
import {sizes} from 'src/theme/colors';
export const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.margin + 10,
    marginHorizontal: sizes.margin + 5,
  },
  text: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.colors.black,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
