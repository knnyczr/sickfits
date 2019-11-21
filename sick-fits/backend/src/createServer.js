// this file is for graphQL Yoga; kinda like express middleware
const { GraphQLServer } = require('graphql-yoga'); 
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db'); 

// Create the graphQL yoga server
function createServer() {
    return new GraphQLServer({
        //this is for two prisma servers basically. this is for graphQL server
        typeDefs: 'src/schema.graphql', 
        resolvers: {
            Mutation,
            Query,
        }, 
        resolverValidationOptions: {
            requireResolversForResolveType: false
        }, 
        context: req => ({ ...req, db })
        //this is for the resolvers to have access to the db; you pass it using context
    });
}

module.exports = createServer; 