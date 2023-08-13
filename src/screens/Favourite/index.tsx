import React from 'react';
import {observer} from 'mobx-react';
import {View} from 'react-native';

import {store} from '@store/index';
import {getFavProducts} from '../Home/controller';
import Products from '../Home/component/Products';
import HeaderText from 'src/component/HeaderText';

function Favourite() {
  const fav = store.favorite;
  const products = getFavProducts(fav);
  return (
    <View>
      <HeaderText title={'Your Favourite'} />
      <Products finalProduct={products} />
    </View>
  );
}
export default observer(Favourite);
