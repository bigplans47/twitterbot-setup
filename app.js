var TwitterPackage = require('twitter');

// replace the words in caps with the keys that
// we saw before on apps.twitter.com
var secret = {
  consumer_key: 'eJ0OJJA2LrxO8Lg9sgbxcAg76',
  consumer_secret: '1Q2gkRhjtKlKwwyPbThxSaBM2JCzT1LKNCMH0iI9in0DWZmZBQ',
  access_token_key: '305389522-QGWo42iR8Jw2ojarvjoMU03uQf6cZF4twYkcMeHP',
  access_token_secret: 'i7kaEJzVgwgcmv8JqaTGGEB4L1Esnqi2r6EbtrASuW5ma'
}

var Twitter = new TwitterPackage(secret);

var query = "dogs";
Twitter.get('search/tweets', {q: query, count: 1, lang:"en"}, function(error, tweets, response) {

   var tweet_list = tweets['statuses'];

   for (var i = 0; i < tweet_list.length; i++) {
        // if ('retweeted_status' in tweet_list[i]) {
        //     continue;
        // }
        var screen_name = tweet_list[i].user.screen_name;
        var message = "@" + screen_name + " dogs wow";
        var tweet_id = tweet_list[i].id_str

        try {
            Twitter.post('statuses/update', {"status": message, "in_reply_to_status_id":tweet_id}, function(error, tweet, response){
                 console.log("Tweet posted successfully!")
            });
        }

        catch(err) {
            console.log(err);
        }
   }
});
