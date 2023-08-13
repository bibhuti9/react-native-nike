import {Instance, types} from 'mobx-state-tree';

import {authStatus} from './Auth';
import {ProductStoreType, products} from './products';
import {AuthStatusAction} from './Auth/action';
import {productAction} from './products/action';
import {getAuthDefaults} from './Auth/getDefaults';
import {FavoriteStoreType, favorites} from './fav';
import {FavoriteAction} from './fav/action';
import {CartStoreType, carts} from './Cart';
import {cartAction} from './Cart/action';

export const Store = types
  .model('rootStore', {
    authStatus: authStatus,
    products: products,
    favorites: favorites,
    carts: carts,
  })
  .actions(AuthStatusAction)
  .actions(productAction)
  .actions(FavoriteAction)
  .actions(cartAction)
  .views(store => ({
    get product(): ProductStoreType[] {
      return Array.from<ProductStoreType>(store.products.values());
    },
    get favorite(): FavoriteStoreType[] {
      return Array.from<FavoriteStoreType>(store.favorites.values());
    },
    get cart(): CartStoreType[] {
      return Array.from<CartStoreType>(store.carts.values());
    },
  }));

export type StoreType = Instance<typeof Store>;
export const store = Store.create({
  authStatus: getAuthDefaults(),
});
