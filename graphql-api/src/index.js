const express = require("express");
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema/typeDefs')
const resolvers = require('./resolvers/index')


async function startServer(){
    const app = express()

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({app})
    
    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`)
    })
    
}

startServer()