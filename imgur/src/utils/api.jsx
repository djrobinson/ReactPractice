var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '84270876e5074d4';

module.exports = window.api = {
  get:function(url){
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID '+apiKey
      }
    })
    .then(function(res){
      return res.json()
    }).then(function(data){
      console.log(data);
    })
  }
}

