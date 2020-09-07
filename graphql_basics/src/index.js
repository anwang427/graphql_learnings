/*
import myCurrentLocation, { message, getGreeting } from './myModule'; // need curly brace to specify that this is a variable
                                                        // myCurrentLocation is the default export

import addArguments, { subtractArguments } from './math';

console.log(message);
console.log(myCurrentLocation);
console.log(getGreeting(`Anna`));

console.log(addArguments(2, 3));
console.log(Arguments(2, 3));
*/

// Setting up api
import { GraphQLServer } from 'graphql-yoga'; 

// Type definitions (schema)
// defining query datatypes
const typeDefs = `
    type Query {
        hello: String!
    }
`
// Resolvers (what the query returns)
const resolvers = {
    Query: {
        hello() {
            return 'Hello world!'
        }
    }
}

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.start(() => {
    console.log('The server is up!')
})