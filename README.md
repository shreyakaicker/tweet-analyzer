# tweet-analyzer
Tweet analyzer using the Watson Tone Analyzer API

```javascript
git clone project & cd into

npm install

npm run start:server

http://localhost:3000
```

To use this app you must create a config.json file in the root of the project.

```Javascript
{
  "credentials": {
    "username": YOUR_USERNAME,
    "password": YOUR_PASSWORD,
    "version": "v3-beta",
    "version_date": "2016-02-11"
  },
  "twitter": {
    "consumer_key": YOUR_TWITTER_CONSUMER_KEY,
    "consumer_secret": YOUR_SECRET,
    "access_token_key": YOUR_ACCESS_TOKEN,
    "access_token_secret": YOUR_SECRET_ACCESS_TOKEN 
  }
}
```
