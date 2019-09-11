const { GraphQLObjectType, GraphQLList, GraphQLID } = require('graphql');
const { UserType, EmployerType } = require('./types');
const User = require('../models/user');
const Employer = require('../models/employer');

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
    },
    getEmployers: {
      type: new GraphQLList(EmployerType),
      async resolve(parent, args) {
        return Employer.find()
      }
    }
  }
});

module.exports = RootQuery;
