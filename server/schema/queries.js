const { GraphQLObjectType, GraphQLList, GraphQLID } = require('graphql');
const { UserType } = require('./types');
const User = require('../models/user')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        return User.find();
      }
    },
    getUser: {
      type: UserType,
      args: { userId: { type: GraphQLID } },
      async resolve(parent, args) {
        const user = await User.findById(args.userId);
        return user;
      }
    }
  }
});

module.exports = RootQuery;
