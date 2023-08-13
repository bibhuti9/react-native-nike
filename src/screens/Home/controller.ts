import {FavoriteStoreType} from '@store/fav';
import {store} from '@store/index';
import {ProductStoreType} from '@store/products';

export interface filterType {
  name: string;
  brand: string;
  minPrice: null | number;
  maxPrice: null | number;
  ratting: null | number;
}

const checkPrice = (value: ProductStoreType, filterValue: filterType) => {
  if (filterValue.maxPrice && filterValue.maxPrice !== 0) {
    if (value.price <= filterValue.maxPrice) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

const checkRating = (value: ProductStoreType, filterValue: filterType) => {
  if (filterValue.ratting && filterValue.ratting !== 0) {
    if (filterValue.ratting === value.rating.rate) {
      return checkPrice(value, filterValue);
    } else {
      return false;
    }
  }
  return checkPrice(value, filterValue);
};

const canPassFilter = (value: ProductStoreType, filterValue: filterType) => {
  if (
    value.title.includes(filterValue.name) ||
    value.category.includes(filterValue.name)
  ) {
    return checkRating(value, filterValue);
  }
  return false;
};

export const useProducts = (filter: filterType) => {
  const product: ProductStoreType[] = store.product;
  const filterResulst = product.filter(values => canPassFilter(values, filter));
  return filterResulst;
};

export const addToFavorite = items => {
  store.addFavourite(items);
};
export const getFavProducts = (fav: FavoriteStoreType[]) => {
  const products = fav.map(favorites => favorites.productId);
  return products;
};

export const addToCart = items => {
  store.addCart(items);
};
