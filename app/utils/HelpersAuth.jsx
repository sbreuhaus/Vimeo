import React from 'react';
import axios from 'axios';
import Keys from 'Keys';

const HelpersAuth = {

  getAccessToken: function(){
    if (!localStorage.accessToken || localStorage.expireTime < Date()) {
      window.location = "https://accounts.spotify.com/authorize?client_id=" + KEYS.CLIENT_ID + "&redirect_uri=" + KEYS.REDIRECT_URI + "&scope=" +  encodeURIComponent(SCOPES) + "&response_type=token&state=123";
    } else {
      console.log("got access token from local storage");
      // return localStorage.accessToken;
    }
  },

  // checking for token now
  getParameter: function(name,url){
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
    //http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  },
  checkForToken: function(){
    if (!localStorage.accessToken) {
      $.ajax({
        type: 'POST',
        url: 'https://api.vimeo.com/oauth/authorize/client' + '?grant_type=client_credentials',
        headers: {
         'Authorization': 'Basic ' + btoa(Keys.client_id + ":" + Keys.client_secret)
         },
      }).done(function(response){
        console.log("HelpersAuth.checkForToken response",response);

        localStorage.setItem("accessToken", response.access_token);

      }).fail(function(response){
        console.log("it failed");
        console.log(response);
      });
    } else {
      console.log("You've already got a token");
    }
  },
  getVideo: function(category){
  console.log("What is category", category);
  const accessToken = localStorage.accessToken;
  return $.ajax({
    type: 'get',
    dataType: 'json',
    url: 'https://api.vimeo.com/categories/' + category + '/videos',
    headers: {
      "Authorization" : "Bearer " + accessToken
     },
  }).done(function(response){
    console.log("should Be some videos", response);
    return response;
  }).fail(function(response){
    console.log("it failed");
    console.log(response);
  });
},

};

export default HelpersAuth;


// curl -X POST https://api.vimeo.com/oauth/authorize/client
//     grant_type=client_credentials&
//     code=AUTH_CODE_HERE&
//     redirect_uri=REDIRECT_URI&
//     client_id=CLIENT_ID&
//     client_secret=CLIENT_SECRET
// https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/76979871

//'/videos?per_page=3'
