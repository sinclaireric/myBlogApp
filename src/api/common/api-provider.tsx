import {ApolloProvider} from '@apollo/client'; 
import * as React from 'react';
import client from './client';

export function APIProvider({ children }: { children: React.ReactNode }) {
  return (
    // Provide the client to your App
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
