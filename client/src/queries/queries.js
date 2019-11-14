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
      _id
      sender
      recipient
      subject
      content
    }
  }
`

export const SEND_MESSAGE = gql`
  mutation($recipient: String, $sender: String, $subject: String, $content: String){
    sendMessage(recipient: $recipient, sender: $sender, subject: $subject, content: $content) {
      recipient
      sender
      subject
      content
    }
  }
`