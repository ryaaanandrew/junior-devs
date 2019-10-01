const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
 } = require('graphql');

AuthDataType = new GraphQLObjectType({
  name: 'AuthData',
  fields: () => ({
    userId: { type: GraphQLString },
    token: { type: GraphQLString },
    expiresIn: { type: GraphQLString }
  })
});

UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    bio: { type: GraphQLString },
    linkedIn: { type: GraphQLString },
    github: { type: GraphQLString },
    photourl: { type: GraphQLString },
    skills: { type: new GraphQLList(GraphQLString) }
  })
});

EmployerType = new GraphQLObjectType({
  name: 'Employer',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    company: { type: GraphQLString }
  })
});

MessageType = new GraphQLObjectType({
  name: 'Messages',
  fields: () => ({
    id: { type: GraphQLID },
    sender: { type: GraphQLString },
    recipient: { type: GraphQLString },
    subject: { type: GraphQLString },
    content: { type: GraphQLString }
  })
});

module.exports = {
  UserType,
  EmployerType,
  MessageType,
  AuthDataType
}