

const twit= require('Twit');
const notifier=require('node-notifier');
const open=require('open');
const franc=require('franc');

const apikey='bHKGz1I3IaBDzcMu7BkfSZ33F';
const apiSecretkey='1lvn8YREjULrrU6XZLJ3mPwz37AniH4QMjvoIsUH8XvNFGMnsN';
const accessTokenSecret='AAAAAAAAAAAAAAAAAAAAAAhuHAEAAAAAmFglWg7n9lblBu6h%2Fb8J3edPG9Q%3DaYJLOnaXxZR5qddk2M3xncL71Lq9Hz4bDeKpdm5qfMVOI7TW5y';

var config=require('./config');

var T=new twit({
consumer_key: apikey,
consumer_secret: apiSecretkey,
access_Token: access_Token,
access_Token_Secret: accessTokenSecret, 
});
{async => {
T.get('search/tweets',{q:'#corona since:2020-08-21',count:50}),
function(err,data,response){
var tweets=data;
const tweets=data.statuses
.map(tweet=>tweet.text)}
console.log(tweets);
let url='https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}'
notifier.notify({
    title:tweet.user.name,
    message:tweet.text
});
notifier.on('click',async function(notifierObject,options,eventH){
console.log('clicked');
await open(url);
}
)
 var stream=T.stream('statuses/filter',{track:'#corona'})
 stream.on('tweet',function(tweet){
     console.log(tweet.text);
     console.log('Language: '+franc(tweet.text))
     console.log('-----');
 });
/*var params={ q: 'Corona since:21.8.2020',count:10};
T.get('search/tweets',params,olddata);
 
function olddata(err,data,response)
{
 var tweets=data.statuses;
 console.log(data);
}*/

