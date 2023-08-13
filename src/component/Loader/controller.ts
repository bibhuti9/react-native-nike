import {store} from '@store/index';

export const setLoader = (status: boolean) => {
  store.setLoader(status);
};
