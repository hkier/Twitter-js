const express = require('express');
const volleyball = require('volleyball');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express(); // creates an instance of an express application


app.use(volleyball);

app.get('/*', function (req, res, next) {
  // this is what will happen when GET /
  // console.log(req.originalUrl);
  res.send('Hello, welcome to our Twitter App!');
  next();
});


app.listen(3000, function () {
  console.log('Listen on 3000');
});
