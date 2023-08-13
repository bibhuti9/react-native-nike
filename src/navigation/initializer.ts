import {AppRegistry} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import NavigatorContainer from './index';
import {provider} from 'src/theme/provider';

export function createRootContainer() {
  return AppRegistry.registerComponent('reactnativechat', () =>
    gestureHandlerRootHOC(provider(NavigatorContainer)),
  );
}
