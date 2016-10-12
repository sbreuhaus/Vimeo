import React from 'react';
import NewVideos from 'NewVideos';

const DisplayVideo = React.createClass({
  componentDidMount: function(){
    console.log("What does videos look like", this.props.videos);
  },

  render: function(){

    let url = this.props.videos.map( (video, index) => {
        let link = video.uri;
        link = link.slice(8, 17);
        let baseURL = 'https://player.vimeo.com/video/';
        return baseURL + link
    })
    return(
      <div>
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
