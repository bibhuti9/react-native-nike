import {fetchProducts} from 'src/utils/hooks';

export const syncApp = async () => {
  fetchProducts();
};
