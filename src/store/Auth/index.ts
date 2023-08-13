import {types} from 'mobx-state-tree';

export const authStatus = types.model('authStore', {
  currentStatus: types.number,
  loader: types.boolean,
});
