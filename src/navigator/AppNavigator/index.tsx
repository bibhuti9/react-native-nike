import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTab from '../BottomTab';
import {screensOptions} from '../options';
import ProductInfo from 'src/screens/Product';
import StatusBar from '../../component/StatucBar';

const Stack = createStackNavigator();
export default function AppStack(): JSX.Element {
  return (
    <>
      <StatusBar />
      <Stack.Navigator screenOptions={screensOptions}>
        <Stack.Screen name="Bottom" component={BottomTab} />
        <Stack.Screen name="productInfo" component={ProductInfo} />
      </Stack.Navigator>
    </>
  );
}
