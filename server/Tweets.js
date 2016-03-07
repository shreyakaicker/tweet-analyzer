'use strict';

var config = require('../config.json');
var Twitter = require('twitter');
var jfs = require('jsonfile');
var Q = require('q');

class Tweets {

  constructor(){
    this.client = new Twitter({
      consumer_key: config.twitter.consumer_key,
      consumer_secret: config.twitter.consumer_secret,
      access_token_key: config.twitter.access_token_key,
      access_token_secret: config.twitter.access_token_secret,
    });
  }

  getLatestTweet() {
    let deferred = Q.defer();
    this.client.get('statuses/user_timeline', (error, tweets, response) => {
      if(error) deferred.reject(new Error(error));

      deferred.resolve(tweets[0].text);
    });
    return deferred.promise;
  }
}

module.exports = Tweets;
