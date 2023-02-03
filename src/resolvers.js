const { Task } = require('./models/index');

const resolvers = {
  Query: {
    hello: () => 'Hello world with GraphQL!',

    greet(root, args, context) {
      return `Hello ${args.name}!, ${context.messageId}`;
    },

    // Get all tasks
    async getAllTasks() {
      return await Task.getAll();
    },

    // Get one task
    async getTask(_, { id }) {
      return await Task.getOne(id);
    }
  },
  Mutation: {
    // Create a new task
    async createTask(_, { input}) {
      return await Task.create(input);
    },

    // Update a task
    async updateTask(_, { id, input }) {
      return await Task.update(id, input);
    },

    // Delete a task
    async deleteTask(_, { id }) {
      return await Task.delete(id);
    }
  }
}

module.exports = resolvers;
