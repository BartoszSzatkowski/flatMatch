import React from 'react';
import Routes from './components/Routes';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://10.197.41.43:4000/',
  cache,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}
