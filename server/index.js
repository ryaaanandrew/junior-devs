const express = require('express');
const mongoose = require('mongoose');
const graphQLHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.use('/graphQL', graphQLHTTP({
  schema: schema,
  graphiql: true
}));
 
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-8nozd.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useFindAndModify: false }
  ).then(app.listen(PORT, () => console.log(`Now listening on port ${PORT}`)))
    .catch(err => console.log(err))
