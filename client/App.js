import React, { useState } from 'react';
import Routes from './components/Routes';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { UserContext } from './UserContext';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://10.197.42.59:4000/',
  cache,
});

export default function App() {
  const [user, setUser] = useState({});
  const [conversation, setConversation] = useState({});
  return (
    <UserContext.Provider
      value={{ user, setUser, conversation, setConversation }}
    >
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </UserContext.Provider>
  );
}
