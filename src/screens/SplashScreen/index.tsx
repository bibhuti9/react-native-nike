import {store} from '@store/index';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from 'src/theme';
import {sizes} from 'src/theme/colors';
import {syncApp} from './controller';

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      store.setAuthStatus(1);
      syncApp();
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nike</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: sizes.L,
    color: theme.colors.black,
  },
});
