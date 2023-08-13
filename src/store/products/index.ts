import {Instance, SnapshotIn, types} from 'mobx-state-tree';

const ratingType = types.model({
  rate: types.number,
  count: types.number,
});

export const product = types.model('productStore', {
  id: types.identifierNumber,
  title: types.string,
  price: types.number,
  description: types.string,
  category: types.string,
  image: types.string,
  rating: ratingType,
});

export const products = types.map(product);

export interface ProductStoreType extends Instance<typeof product> {}
export interface ProductSnapShot extends SnapshotIn<typeof product> {}
