import React from 'react';
import {View} from 'react-native';

import {store} from '@store/index';
import {getFavProducts} from '../Home/controller';
import HeaderText from 'src/component/HeaderText';
import Products from '../Home/component/Products';
import {observer} from 'mobx-react';

function Cart() {
  const cart = store.cart;
  const products = getFavProducts(cart);

  return (
    <View>
      <HeaderText title={'Your Carts'} />
      <Products finalProduct={products} />
    </View>
  );
}
export default observer(Cart);
