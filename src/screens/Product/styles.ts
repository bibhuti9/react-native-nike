import {StyleSheet} from 'react-native';

import {theme} from 'src/theme';
import {sizes} from 'src/theme/colors';
import {getShadow} from '../../theme/commonStyle';

const borderRadious = 200;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    height: 200,
    width: sizes.width,
    backgroundColor: theme.colors.black,
    borderBottomLeftRadius: borderRadious,
    borderBottomRightRadius: borderRadious,
    zIndex: -1,
    transform: [{scaleX: 1.2}],
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lgImage: {
    width: 250,
    height: 200,
    alignSelf: 'center',
  },
  scContainer: {
    marginHorizontal: sizes.margin,
    padding: sizes.margin,
    borderRadius: sizes.radious,
    ...getShadow(4),
    backgroundColor: theme.colors.white,
    margin: 10,
  },
  scImg: {
    width: 90,
    height: undefined,
    aspectRatio: 2,
  },
  productInfoContainer: {
    marginTop: sizes.margin + 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    fontSize: 24,
    fontWeight: '900',
    color: theme.colors.black,
  },
  price: {
    fontWeight: '800',
  },
  addToCart: {
    backgroundColor: theme.colors.black,
    padding: sizes.padding + 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: sizes.margin + 5,
    marginTop: sizes.margin + 10,
  },
});
