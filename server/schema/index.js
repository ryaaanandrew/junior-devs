const { GraphQLSchema } = require('graphql');
const RootQueries = require('./queries');
const RootMutations = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQueries,
  mutation: RootMutations
});