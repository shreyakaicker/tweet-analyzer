var express = require('express');

var Tweets = require('./Tweets');
var Analyzer = require('./Analyzer');

var app = express();

app.use(express.static(`${__dirname}/../static`));

var tweets = new Tweets();
var analyzer = new Analyzer();

app.get('/data', (req, res, next) => {
  tweets.getLatestTweet()
    .then((tweet) => {
      analyzer.getAnalysis(tweet)
        .then((a) => {
          res.json(a);
        });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(3000);