import AppStack from '.';
import Home from 'src/screens/Home';
import Cart from 'src/screens/Cart';
import Profile from 'src/screens/Profile';
import Category from 'src/screens/Category';
import Favourite from 'src/screens/Favourite';
import {store} from '@store/index';

export enum screenNames {
  BottomTab = 'BottomTab',
  Home = 'Home',
  AppStack = 'AppStack',
  Category = 'Category',
  Cart = 'Cart',
  Fav = 'Fav',
  Profile = 'Profile',
}

export const BottomTabs = {
  AppStack: {
    Component: AppStack,
    Icon: 'home',
    IconType: 'feather',
  },
  Home: {
    Component: Home,
    Icon: 'grid-outline',
    IconType: 'ionicon',
  },
  Category: {
    Component: Category,
    Icon: 'list-outline',
    IconType: 'ionicon',
  },
  Cart: {
    Component: Cart,
    Icon: 'bag-outline',
    IconType: 'ionicon',
  },
  Fav: {
    Component: Favourite,
    Icon: 'heart-outline',
    IconType: 'ionicon',
  },
  Profile: {
    Component: Profile,
    Icon: 'person-outline',
    IconType: 'ionicon',
  },
};

export const BottomStack = [
  {
    Component: Home,
    lable: 'Home',
  },
  {
    Component: Category,
    lable: 'Category',
  },
  {
    Component: Cart,
    lable: 'Cart',
  },
  {
    Component: Favourite,
    lable: 'Fav',
  },
  {
    Component: Profile,
    lable: 'Profile',
  },
];
