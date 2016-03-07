'use strict';

var config = require('../config.json');
var Q = require('q');
var watson = require('watson-developer-cloud');

class Analyzer {

  constructor() {
    this.analyzer = watson.tone_analyzer({
      username: config.credentials.username,
      password: config.credentials.password,
      version : config.credentials.version,
      version_date: config.credentials.version_date,
    });
  }

  getAnalysis(text) {
    let text = { text };

    let deferred = Q.defer();

    this.analyzer.tone(text, (err, tone) => {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(tone);
      }
    });
    
    return deferred.promise;
  }
}

module.exports = Analyzer;
