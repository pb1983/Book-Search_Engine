const typeDefs = `

type Book {
    bookId: String!
    authors: [String!]
    title: String!
    description: String!
    image: String
    link: String

}

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
}

type Auth {
    token: ID!
    user: User
  }


type Query {
    me: User
}

input saveBookInput {    
    title: String!
    authors: [String]
    description: String!
    image: String
    link: String
    bookid: String!
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(saveBookInput): User
    removeBook (bookId: ID!): User
}


`

module.exports = typeDefs;