import {StyleSheet} from 'react-native';
import {theme} from 'src/theme';
import {sizes} from 'src/theme/colors';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: sizes.margin + 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.margin,
    marginLeft: sizes.margin + 10,
    backgroundColor: theme.colors.white,
    padding: sizes.padding,
    borderRadius: sizes.radious,
    flex: 1,
  },
  textInput: {
    fontSize: sizes.S,
    marginLeft: sizes.margin,
    flex: 1,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
