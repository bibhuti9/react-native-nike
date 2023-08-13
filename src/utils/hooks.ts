import {getProducts} from '@api/services/request/product';
import {store} from '@store/index';
import {setLoader} from 'src/component/Loader/controller';

export const fetchProducts = async () => {
  try {
    setLoader(true);
    const products = await getProducts();
    store.addProduct(products);
    setLoader(false);
  } catch (err) {
    setLoader(false);
  }
};
