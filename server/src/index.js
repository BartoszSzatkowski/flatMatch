'use strict';
const { UserTable, sequelize } = require('./model/index');
const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');
const path = require('path');
const resolvers = require('./graphql/resolvers');

const types = readFileSync(
  path.join(__dirname, 'graphql', 'types.graphql'),
  'utf8'
);

const typeDefs = gql`
  ${types}
`;

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await sequelize.sync();
  server.listen().then(({ url }) => console.log(`server running on ${url}`));
})();
