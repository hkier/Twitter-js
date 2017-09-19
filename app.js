const express = require('express');
const volleyball = require('volleyball');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes');
app.use(volleyball);
app.use('/', routes);
app.use(express.static('public'));


var locals = {
    title: 'Twitter',
    people: [
        { name: 'Gandalf' },
        { name: 'Frodo' },
        { name: 'Hermione' }
      ]
    };
    nunjucks.render('index.html', locals, function (err, output) {
        console.log(output);
      });
const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates


app.get('/', function (req, res, next) {
  // this is what will happen when GET /
  // console.log(req.originalUrl);
  // res.send('Hello, welcome to our Twitter App!');
  res.render('index', { title: 'Hall of Fame', people: people });
  next();
});


app.listen(3000, function () {
  console.log('Listening on 3000');
});
