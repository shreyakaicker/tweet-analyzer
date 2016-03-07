'use strict';

var config = require('../config.json');
var Analyzer = require('./Analyzer');
var Twitter = require('twitter');
var jfs = require('jsonfile');


class Tweets {

  constructor(){
    this.client = new Twitter({
      consumer_key: config.twitter.consumer_key,
      consumer_secret: config.twitter.consumer_secret,
      access_token_key: config.twitter.access_token_key,
      access_token_secret: config.twitter.access_token_secret,
    });

    this.analyzer = new Analyzer();
  }

  getLatestTweet() {
    this.client.get('favorites/list', function(error, tweets, response){
      if(error) throw error;
      jfs.writeFileSync('./callback.json', tweets[0]);
      console.log(tweets[0].text);
    });
  }
}

module.exports = Tweets;
