import { gql } from 'apollo-boost';

export const GET_CANDIDATES = gql`
  query {
    users {
      email
      username
      bio
      linkedIn
      github
      skills
    }
  }
`