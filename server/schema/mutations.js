const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Employer = require('../models/employer');
const { UserType, EmployerType } = require('./types');

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
        const registeredEmail = await User.findOne({ email: args.email });
        const registeredUsername = await User.findOne({ email: args.email });
        
        if(registeredEmail || registeredUsername) {
          throw new Error('User already registered, Please log in');
        };

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
        return await user.save();
      }
    },
    createEmployer: {
      type: EmployerType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        company: { type: new GraphQLNonNull(GraphQLString) }
      },
      async resolve(parent, args) {
        const registeredEmployer = await Employer.findOne({ email: args.email });

        if(registeredEmployer) {
          throw new Error('Employer email already registered, Please log in');
        };
        const hashedPassword = await bcrypt.hash(args.password, 12);

        let employer = new Employer({
          email: args.email,
          password: hashedPassword,
          company: args.company
        });
        
        return await employer.save();
      }
    }
  }
});

module.exports = RootMutation;
