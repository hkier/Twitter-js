module.exports = function (io) {
const express = require('express');
const router = express.Router();
var socketio = require('socket.io');
// var server = app.listen(3000);
// var io = socketio.listen(server);
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets, showForm: true });
});


router.get('/users/:name', function (req, res, next) {
  var userTweets = tweetBank.find({ name: req.params.name });
  res.render('index', { tweets: userTweets, showForm: true });
});

router.get('/tweets/:id', function (req, res, next) {
  var id = Number(req.params.id);
  var userTweets = tweetBank.find({ id: id });
  res.render('index', { tweets: userTweets });
});

router.post('/tweets', function (req, res) {
  // console.log(req.body);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  io.sockets.emit('newTweet', { name: name, content: text });
  res.redirect('/');
});
  // ...
  // route definitions, etc.
  // ...
  return router;
};
