import {Instance, SnapshotIn, types} from 'mobx-state-tree';
import {product} from '@store/products';

export const cart = types.model({
  id: types.number,
  productId: types.reference(product),
  count: 0,
});

export const carts = types.map(cart);

export interface CartStoreType extends Instance<typeof cart> {}
export interface CartSnapShot extends SnapshotIn<typeof cart> {}
