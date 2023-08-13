import {StyleSheet} from 'react-native';
import {theme} from 'src/theme';
import {sizes} from 'src/theme/colors';
import {getShadow} from '../../../../../theme/commonStyle';

export const styles = StyleSheet.create({
  container: {
    margin: sizes.margin,
    flex: 1,
  },
  children: {
    flexDirection: 'row',
    marginVertical: sizes.margin,
    backgroundColor: theme.colors.white,
    ...getShadow(4),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: sizes.margin,
  },
  filterButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },
  iconStyles: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    padding: sizes.padding,
  },
  textStyle: {
    fontSize: sizes.S,
    marginHorizontal: sizes.margin,
  },
  inputContainer: {
    flex: 1,
    marginLeft: sizes.margin,
    fontSize: sizes.XL,
  },
  resetText: {
    fontSize: sizes.S,
    marginRight: sizes.margin + 10,
    color: theme.colors.primary,
  },
  filterButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: sizes.radious,
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizes.padding + 5,
    marginHorizontal: sizes.margin,
    marginTop: 10,
  },
  filterText: {
    fontSize: sizes.M,
    color: theme.colors.black,
    marginHorizontal: sizes.margin - 5,
  },
});
