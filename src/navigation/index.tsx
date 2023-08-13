import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '../utils/navigation';
import AuthNavigators from 'src/navigator/AuthNavigators';

export default function NavigatorContainer(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigators />
    </NavigationContainer>
  );
}
