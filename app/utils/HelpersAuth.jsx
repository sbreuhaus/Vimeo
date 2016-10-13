import React from 'react';
import axios from 'axios';
import Keys from 'Keys';

const HelpersAuth = {
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
  const accessToken = localStorage.accessToken;
  return $.ajax({
    type: 'get',
    dataType: 'json',
    url: 'https://api.vimeo.com/categories/' + category + '/videos?per_page=50',
    headers: {
      "Authorization" : "Bearer " + accessToken
     },
  }).done(function(response){
    return response;
  }).fail(function(response){
    alert("There seems to me something wrong with Vimeo at the moment.  Try again later")
    console.log("it failed");
    console.log(response);
  });
},

};

export default HelpersAuth;
