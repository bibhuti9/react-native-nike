import {StoreType} from '..';
import {CartStoreType} from './index';

export function cartAction({carts}: StoreType) {
  function addCart(cart: CartStoreType) {
    const isExists = carts.get(cart.id);
    if (isExists) {
      carts.delete(cart.id);
    } else {
      carts.set(cart.id, {id: cart.id, productId: cart.id, count: 1});
    }
  }
  function hasId(productId: number) {
    const isExists = carts.get(productId);
    if (isExists) {
      return true;
    } else {
      return false;
    }
  }
  return {addCart, hasId};
}
