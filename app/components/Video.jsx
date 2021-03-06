import React from 'react';
import VideoForm from 'VideoForm';
import HelpersAuth from 'HelpersAuth';
import DisplayVideo from 'DisplayVideo';

var Video = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  componentDidMount: function(){
    HelpersAuth.checkForToken();
  },
  shuffle: function (array) {  // Stack-O
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

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
      let videos = filterVids.slice(0, 3);
      filterVids.splice(0, 3);
      that.setState({
        videos: videos,
        isLoading: false,
        category: category,
        filterVids: filterVids
      });
    })
  },
  render: function (){
    var {videos, isLoading, description, filterVids, category} = this.state;
    function renderVideos(){
      let barProgress = {
        width: '75%'
      };
      if (isLoading) {
        return  <div className="success progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuetext="Loading..." aria-valuemax="100">
                  <span className="progress-meter" style={barProgress}>
                    <p className="progress-meter-text">Loading...</p>
                  </span>
                </div>
      } else if (videos){
        return (
          <div>
            <DisplayVideo
              videos={videos}
              filterVids={filterVids}
              category={category}/>
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
