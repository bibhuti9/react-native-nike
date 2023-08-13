import {StackNavigationOptions} from '@react-navigation/stack';
import {theme} from '../theme/index';

export const screensOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: theme.colors.grey3,
  },
};
