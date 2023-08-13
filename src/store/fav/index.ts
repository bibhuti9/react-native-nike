import {product} from '@store/products';
import {Instance, SnapshotIn, types} from 'mobx-state-tree';

export const favorite = types.model({
  id: types.number,
  productId: types.reference(product),
});

export const favorites = types.map(favorite);

export interface FavoriteStoreType extends Instance<typeof favorite> {}
export interface FavoritesSnapShot extends SnapshotIn<typeof favorite> {}
