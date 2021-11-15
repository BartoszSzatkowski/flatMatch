import React, { useState } from 'react';
import Routes from './components/Routes';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { UserContext } from './UserContext';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://10.197.41.142:4000/',
  cache,
});

export default function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </UserContext.Provider>
  );
}
