import {StyleSheet} from 'react-native';

import {theme} from 'src/theme';
import {sizes} from 'src/theme/colors';
import {getShadow} from '../../../../../theme/commonStyle';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: sizes.padding,
    width: sizes.width / 2.3,
    ...getShadow(2),
    borderRadius: sizes.radious,
    marginBottom: sizes.margin + 10,
  },
  fav: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 3,
  },
  productImg: {width: 33, height: 28},
  image: {
    width: '100%',
    aspectRatio: 1,
    height: undefined,
    marginTop: sizes.margin,
    marginVertical: sizes.margin,
  },
  desc: {
    color: theme.colors.grey1,
    marginVertical: 10,
  },
});
