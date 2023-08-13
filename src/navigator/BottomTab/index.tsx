import React from 'react';
import {observer} from 'mobx-react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {styles} from './styles';
import {theme} from 'src/theme';
import {store} from '@store/index';
import {useCarts} from './controller';
import {BottomTabs, screenNames} from '../AppNavigator/screenNames';

const Bottom = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const {bottom} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            style={styles.button}
            onPress={onPress}
            key={String(index)}
            onLongPress={onLongPress}>
            {options?.tabBarBadge !== undefined && (
              <View style={styles.badgeContainer}>
                <Text style={styles.badge}>{options?.tabBarBadge}</Text>
              </View>
            )}
            <Icon
              name={BottomTabs[label].Icon}
              size={30}
              color={isFocused ? theme.colors.primary : theme.colors.white}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function BottomTab() {
  const favs = store.favorite;
  const cart = store.cart;
  const carts = useCarts();

  return (
    <Bottom.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Bottom.Screen
        name={screenNames.Home}
        component={BottomTabs.Home.Component}
      />
      <Bottom.Screen
        name={screenNames.Category}
        component={BottomTabs.Category.Component}
      />
      <Bottom.Screen
        name={screenNames.Cart}
        component={BottomTabs.Cart.Component}
        options={{tabBarBadge: carts}}
      />
      <Bottom.Screen
        name={screenNames.Fav}
        component={BottomTabs.Fav.Component}
        options={{tabBarBadge: favs.length}}
      />
      <Bottom.Screen
        name={screenNames.Profile}
        component={BottomTabs.Profile.Component}
      />
    </Bottom.Navigator>
  );
}
export default observer(BottomTab);
