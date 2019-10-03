const express = require('express');
const mongoose = require('mongoose');
const graphQLHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const isAuth = require('./middleware/is-auth');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(isAuth);

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true // <-- REQUIRED backend setting
};

app.use(cors(corsOptions));

app.use('/graphQL', graphQLHTTP({
  schema: schema,
  graphiql: true
}));
 
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-8nozd.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useFindAndModify: false }
  ).then(app.listen(PORT, () => console.log(`Now listening on port ${PORT}`)))
    .catch(err => console.log(err))
