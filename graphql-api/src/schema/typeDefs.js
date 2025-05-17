const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Query{
        hello:String
        users:[User]
        user(id:ID!):User
    }

    type User{
        id:ID!
        name:String!
        email:String!
    }
    
    type Mutation{
        createUser(name:String!, email:String!):User
    }
`

module.exports = typeDefs
