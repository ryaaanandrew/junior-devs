const express = require('express');
const mongoose = require('mongoose');
const graphQLHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();
const PORT = 3001;

app.use('/graphQL', graphQLHTTP({
  schema: schema,
  graphiql: true
}));
 
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-8nozd.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
  ).then(app.listen(PORT, () => console.log(`Now listening on port ${PORT}`)))
    .catch(err => console.log(err))
