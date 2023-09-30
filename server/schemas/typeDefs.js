
const typeDefs = `
  type Book {
    bookId: String!
    authors: [String]
    title: String!
    description: String!
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input BookInput {    
    title: String!
    authors: [String]
    description: String!
    image: String
    link: String
    bookId: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedBooks(input: BookInput!): User
    removeBook(bookId: ID!): User
  }
`

module.exports = typeDefs;