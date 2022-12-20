const tasks = require('./sample');

const resolvers = {
  Query: {
    hello: () => 'Hello world with GraphQL!',
    greet(root, args, context) {
      return `Hello ${args.name}!, ${context.messageId}`;
    },
    tasks() {
      return tasks;
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input.id = tasks?.length + 1;
      tasks.push(input);
      return input;
    }
  }
}

module.exports = resolvers;
