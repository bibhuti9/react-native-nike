import {Transport} from '@api/Transport';
import {ProductResponseType, productRequestType} from '../types/products';

export const getProducts = async () => {
  const request = productRequestType();
  return (await Transport.get<ProductResponseType>(request)).data;
};
