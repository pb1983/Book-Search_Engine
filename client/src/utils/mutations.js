import {gql} from '@apollo/client'

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
       username
      _id
    }
  }
}
`;
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;


export const SAVE_BOOK = gql`
mutation savedBooks($input: BookInput!) {
  savedBooks(input: $input) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      title
      description
      image
      link
    }
  }
}
`;


export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      title
      description
      image
      link
    }
  }
}
`;