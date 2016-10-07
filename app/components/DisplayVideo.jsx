import React from 'react';
import NewVideos from 'NewVideos';



const DisplayVideo = React.createClass({
  render: function(){
    const Styles = {
      width: '50%',
    }
    let url = this.props.videos.map( (video, index) => {
        let link = video.uri;
        link = link.slice(8, 17);
        let baseURL = 'https://player.vimeo.com/video/';
        return baseURL + link
    })
    return(
      <div>
        <h3 className="title-box">DisplayVideo</h3>
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

// let uri = "//player.vimeo.com" + video.uri + "?";
// return <li key={index}>
//           <iframe src={uri} width={video.width} height={video.height} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
//        </li>
// <iframe height='100%' width='100%' src={myVideo} frameBorder="0" allowFullScreen></iframe>
// <iframe src="https://player.vimeo.com/video/76979871" width="480" height="270" frameborder="0" title="The New Vimeo Player (You Know, For Videos)" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
