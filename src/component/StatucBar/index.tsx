import {SafeAreaView, StatusBar as Bar, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../../theme/index';

export default function StatusBar({...props}): JSX.Element {
  return (
    <SafeAreaView style={styles.statusBar}>
      <Bar backgroundColor={theme.colors.primary} {...props} />
    </SafeAreaView>
  );
}
const STATUSBAR_HEIGHT = Bar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: theme.colors.primary,
  },
});
