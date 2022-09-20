const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/professional', professionalRoutes);


app.listen(port);
console.log(`Connected to DB and listening on ${port}`);