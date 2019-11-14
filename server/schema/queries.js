const { GraphQLObjectType, GraphQLList, GraphQLID } = require('graphql');
const { UserType, EmployerType, MessageType } = require('./types');
const User = require('../models/user');
const Employer = require('../models/employer');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async resolve(parent, args, req) {
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
    },
    getMessages : {
      type: new GraphQLList(MessageType),
      async resolve(parent, args, req) {
        try {
          if(!req.isAuth || !req.userId) {
            throw new Error('Unauthorized');
          };

          const user = await User.findById(req.userId);

          return user.messages;
        } catch(err) {
          throw new Error(err);
        }
      }
    }
  }
});

module.exports = RootQuery;
