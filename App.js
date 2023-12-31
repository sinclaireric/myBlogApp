import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';

import { APIProvider } from './src/api';
import { hydrateAuth } from './src/core';
import { RootNavigator } from './src/navigation';

hydrateAuth();

SplashScreen.preventAutoHideAsync();

const App = () => {
  return (
        <APIProvider>
          <RootNavigator />
          <FlashMessage position="top" />
        </APIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;