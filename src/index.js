const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const { allRocks } = require('./allRocks');
const Query = require('./resolvers/Query');
const Mutations = require('./resolvers/Mutations');
const mongoose = require('mongoose');
const {Rock} = require('./models/rock');


mongoose.connect('mongodb+srv://admin-jose:Test123@cluster0.rhgi6.mongodb.net/RockDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })

// let newRock = new Rock({
//         name: `Lapis Lazuli`,
//         description: `Lapis Lazuli is one of the most sought after stones in use since man’s history began. Its deep, celestial blue remains the symbol of royalty and honor, gods and power, spirit and vision. It is a universal symbol of wisdom and truth.`,
//         stock: 35,
//         birthstone: '',
//         color: ['blue']
// })

// newRock.save();
let rockCount = 1;
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