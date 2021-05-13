const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const { allRocks } = require('./allRocks')
const {Rock} = require('./models/rock')

const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin-jose:Test123@cluster0.rhgi6.mongodb.net/RockDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })



let rockCount = 1;
const resolvers = {
    Query: {
        info: () => 'This is a page for a rock store',
        rocks: () => allRocks,
        rock: (parent, args) => {
            for( let x = 0; x < allRocks.length; x++) {
                if(allRocks[x].id === args.id) {
                    return allRocks[x]
                }
            }
            return null
        }

    },
    Mutation: {
        createRock: (parent, args) => {
            const rock = {
                ...args,
                id: `rock-${rockCount++}`
            }
            allRocks.push(rock)
            return rock
        },
        updateRock: (parent, args) => {
            for(let x = 0; x < allRocks.length; x++) {
                if(allRocks[x].id === args.id) {
                    allRocks[x] = {
                        ...args
                    }
                    return allRocks[x]
                }
            }
            return null;
        },
        deleteRock: (parent, args) => {
            for(let x = 0; x < allRocks.length; x++) {
                if(allRocks[x].id === args.id) {
                    let swap = allRocks[x];
                    allRocks[x] = allRocks[allRocks.length - 1]
                    allRocks.pop()
                    return swap
                }
            }
            return null;

        }
    }
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