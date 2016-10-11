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
  handleSearch: function(category){
    var that = this;
    this.setState({
      isLoading: true
    })
    HelpersAuth.getVideo(category).then(function(response){
      var videos = response.data;  // array
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
