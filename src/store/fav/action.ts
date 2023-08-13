import {ProductStoreType} from '@store/products';
import {StoreType} from '..';

export function FavoriteAction({favorites}: StoreType) {
  function addFavourite(product: ProductStoreType) {
    const existsTask = favorites.get(product.id);
    if (existsTask) {
      return favorites.delete(product.id);
    } else {
      return favorites.set(product.id, {id: product.id, productId: product.id});
    }
  }
  function hasId(productId: number) {
    const isExists = favorites.get(productId);
    if (isExists) {
      return true;
    } else {
      return false;
    }
  }
  return {addFavourite, hasId};
}
