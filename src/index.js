require('dotenv').config()
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
})

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  context: {
    messageId: 'test'
  }
}));

const port = 3000;
app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`));