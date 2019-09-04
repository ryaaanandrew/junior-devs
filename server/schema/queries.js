const { GraphQLObjectType, GraphQLList } = require('graphql');
const { UserType } = require('./types');
const User = require('../models/user')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async resolve(args, parent) {
        return User.find();
      }
    }
  }
});

module.exports = RootQuery;
