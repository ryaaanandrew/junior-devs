import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation($email: String!, $username: String!, $password: String!, $bio: String!, $github: String!, $linkedIn: String!, $skills: [String]!){
    createUser(email: $email, username: $username, password: $password, bio: $bio, github: $github, linkedIn: $linkedIn, skills: $skills) {
      email
      username
      bio
      github
      linkedIn
    }
  }
`