// this file is for the connectino of the remote prisma db and give us the ability to query stuffs
const { Prisma } = require('prisma-binding'); 

const db = new Prisma ({
    typeDefs: 'src/generated/prisma.graphql', 
    endpoint: process.env.PRISMA_ENDPOINT, 
    secret: process.env.SECRET, 
    debug: false, 
}); 

module.exports = db; 