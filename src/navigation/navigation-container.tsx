import { NavigationContainer } from '@react-navigation/native';

import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export const NavigationContain = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  
  return (
    <SafeAreaProvider>
      <NavigationContainer >{children}</NavigationContainer>
    </SafeAreaProvider>
  );
};
