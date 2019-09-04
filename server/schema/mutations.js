const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { UserType } = require('./types');

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        bio: { type: new GraphQLNonNull(GraphQLString) },
        github: { type: new GraphQLNonNull(GraphQLString) },
        linkedIn: { type: new GraphQLNonNull(GraphQLString) },
        skills: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
      },
      async resolve (parent, args) {
        const hashedPassword = await bcrypt.hash(args.password, 12);
        let user = new User({
          email: args.email,
          username: args.username,
          password: hashedPassword,
          bio: args.bio,
          github: args.github,
          linkedIn: args.linkedIn,
          skills: args.skills
        });
        const results = await user.save();
      }
    }
  }
});

module.exports = RootMutation;
