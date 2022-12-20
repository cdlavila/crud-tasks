const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
    }
    
    type Task {
        id: ID!
        title: String!
        completed: Boolean!
    }
    
    type Mutation {
        createTask(input: TaskInput): Task
    }
    
    input TaskInput {
        title: String!  
        completed: Boolean!
    }
`

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})
