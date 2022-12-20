const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
    type Query {
        hello: String
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})
