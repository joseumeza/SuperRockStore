const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const Query = require('./resolvers/Query');
const Mutations = require('./resolvers/Mutations');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin-jose:Test123@cluster0.rhgi6.mongodb.net/RockDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })


const resolvers = {
    Query: Query, 
    Mutation: Mutations,
}


const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
})

server
    .listen()
    .then(({url}) =>
        console.log(`Server is running on port  ${url}`) 
)