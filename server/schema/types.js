const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
 } = require('graphql');

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
    skills: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = {
  UserType
}