import {ProductStoreType} from '.';
import {StoreType} from '..';

export function productAction({products}: StoreType) {
  function putProduct(product: ProductStoreType) {
    products.set(product.id, product);
  }
  function addProduct(product: ProductStoreType[]) {
    product.forEach(snapshot => putProduct(snapshot));
  }
  function getStoProduct(productId: number) {
    return products.get(productId);
  }
  return {addProduct, putProduct, getStoProduct};
}
