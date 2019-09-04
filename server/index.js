const express = require('express');
const graphQLHTTP = require('express-graphql');

const app = express();
const PORT = 3001;

app.use('/', (req, res) => {
  res.send('hello world');
});
 
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));