import React from 'react';
import NewVideos from 'NewVideos';

const DisplayVideo = React.createClass({
  componentWillMount: function(){
    this.setState({
      videos: this.props.videos,
      filterVids: this.props.filterVids
    })
  },
  handleLoadNew: function(){
    console.log("LOAD NEW");
    let moreVideos = this.state.filterVids;
    let videos = moreVideos.slice(0, 3);
    this.state.filterVids.splice(0, 3);
    this.setState({
      videos: videos
    })
  },
  shouldComponentUpdate: function(newProps, newState){
    let videos = this.state.filterVids;
    if(videos.length > 3){
      console.log("COMPONENT SHOULD UPDATE");
      return true;
    } else {
      console.log("NO MORE VIDS");
      alert("NO MORE VIDS. CLICK GET MORE VIDEOS");
    }
  },
  componentWillUpdate: function(newProps, newState){
    console.log("COMPONENT IS ABOUT TO UPDATE");
  },
  render: function(){
    let category = this.props.category;
    let url = this.state.videos.map( (video, index) => {
        let link = video.uri;
        link = link.slice(8, 17);
        let baseURL = 'https://player.vimeo.com/video/';
        return baseURL + link
    })
    return(
      <div>
        <button className="expanded hollow button" onClick={this.handleLoadNew}>Check out some more {category} vids!</button>
        <div >
          <ul>
            <NewVideos url={url}/>
          </ul>
        </div>
      </div>
    )
  }
});
export default DisplayVideo;
