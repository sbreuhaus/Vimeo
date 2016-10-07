import React from 'react';
import VideoForm from 'VideoForm';
import ajaxHelpers from 'ajaxHelpers';
import HelpersAuth from 'HelpersAuth';
import DisplayVideo from 'DisplayVideo';

var Video = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      videoRes: undefined
    }
  },

  handleSearch: function(){
    var that = this;
    this.setState({
      isLoading: true,
      category: undefined
    })
    HelpersAuth.getVideo().then(function(response){
      // console.log("this is response ", response);
      var videos = response.data;  // array
      // console.log("this is what videos looks like", videos);
      that.setState({
        videos: videos,
        isLoading: false
      })
    })
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
