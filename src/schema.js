const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        getAllTasks: [Task]
        getTask(id: ID!): Task
    }
    
    type Task {
        id: ID!
        title: String!
        description: String!
        completed: Boolean!
    }
    
    type Mutation {
        createTask(input: TaskInput): Task
        updateTask(id: ID!, input: TaskInput): Task
        deleteTask(id: ID!): Task
    }
    
    input TaskInput {
        title: String!  
        description: String!
        completed: Boolean!
    }
`

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})
