import ProductInfo from 'src/screens/Product';
import AppStack from '.';
import BottomTab from '../BottomTab';

export enum screenNames {
  Home = 'Home',
  ProductInfo = 'ProductInfo',
  BottomTab = 'BottomTab',
}

export const screens = [
  {
    name: screenNames.BottomTab,
    component: BottomTab,
  },
];

export const BottomTabs = {
  AppStack: {
    Component: AppStack,
    Icon: 'home',
    IconType: 'feather',
  },

  ProductInfo: {
    Component: ProductInfo,
    Icon: 'shopping-bag',
    IconType: 'feather',
  },
};
