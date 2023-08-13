import React from 'react';
import {observer} from 'mobx-react';

import {store} from '../store';
import AppStack from './AppNavigator';
import SplashScreen from '../screens/SplashScreen';

function AuthNavigators() {
  switch (store.authStatus.currentStatus) {
    case 0:
      return <SplashScreen />;
    case 1:
      return <AppStack />;
    default:
      return <SplashScreen />;
  }
}
export default observer(AuthNavigators);
