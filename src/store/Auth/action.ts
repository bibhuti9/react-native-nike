import {StoreType} from '..';

export function AuthStatusAction({authStatus}: StoreType) {
  function setAuthStatus(status: number) {
    authStatus.currentStatus = status;
  }
  function setLoader(status: boolean) {
    authStatus.loader = status;
  }
  return {setAuthStatus, setLoader};
}
