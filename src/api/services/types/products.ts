export const productRequestType = () => {
  const query = {
    path: 'products',
  };
  return query;
};
export interface ProductResponseType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
