import React from 'react';
import {observer} from 'mobx-react';
import {Overlay} from '@rneui/themed';
import {ActivityIndicator, Text} from 'react-native';

import {store} from '@store/index';
import {theme} from '../../theme/index';

export interface propsTypes {
  title?: string;
}

function Loader({title}: propsTypes) {
  const {loader} = store.authStatus;
  return (
    <Overlay isVisible={loader}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text>{title}</Text>
    </Overlay>
  );
}
export default observer(Loader);
