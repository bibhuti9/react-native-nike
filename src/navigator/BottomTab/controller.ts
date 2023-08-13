import {CartStoreType} from '@store/Cart';
import {store} from '@store/index';

export const useCarts = () => {
  const cart: CartStoreType[] = store.cart;
  const initial = 0;
  const total = cart.reduce((value, prev) => {
    return parseInt(value) + parseInt(prev.count);
  }, initial);
  return total;
};
