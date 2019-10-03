import { gql } from 'apollo-boost';

export const GET_CANDIDATES = gql`
  query {
    users {
      id
      email
      username
      bio
      linkedIn
      github
      skills
      photourl
    }
  }
`
export const GET_CANDIDATE = gql`
  query($userId: ID) {
    getUser(userId: $userId) {
      email
      username
      id
      linkedIn
      github
      bio
      skills
    }
  }
`

export const GET_MESSAGES = gql`
  query {
    getMessages {
      id
      sender
      recipient
      subject
      content
    }
  }
`