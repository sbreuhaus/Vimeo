import React from 'react';
import VideoForm from 'VideoForm';
import ajaxHelpers from 'ajaxHelpers';
import HelpersAuth from 'HelpersAuth';
import DisplayVideo from 'DisplayVideo';

var Video = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  shuffle: function (array) {  // Stack-O
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
  },
  handleSearch: function(category){
    var that = this;
    this.setState({
      isLoading: true
    })
    HelpersAuth.getVideo(category).then(function(response){
      let filterVids = response.data;
      filterVids = that.shuffle(filterVids);
      var videos = filterVids.slice(0, 3);
      that.setState({
        videos: videos,
        isLoading: false,
        category: category
      });
    })
  },
  handleCategoryChoice: function(e){
    e.preventDefault();
    this.setState({value: event.target.value});
    console.log("VALUE", value);
  },
  componentDidMount: function(){
    HelpersAuth.checkForToken();
  },
  render: function (){
    var {videos, isLoading, description} = this.state;
    function renderVideos(){
      if (isLoading) {
        return <h3>Fetching Videos...</h3>
      } else if (videos){
        return (
          <div>
            <DisplayVideo videos={videos}/>
          </div>
        )
      }
    }
    return(
      <div>
        <VideoForm onSearch={this.handleSearch}/>
        {renderVideos()}
      </div>
    )
  }
})

module.exports = Video;
