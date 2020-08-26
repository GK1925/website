const Twit = require('twit');
require('dotenv').config();

const T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
});

var stream = T.stream('statuses/filter', { track: '#corona' });

stream.on('tweet', function (tweet) {
    console.log(tweet);
});