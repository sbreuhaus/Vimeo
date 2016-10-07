import React from 'react';
import NewVideos from 'NewVideos';


const DisplayVideo = React.createClass({

  componentWillMount: function(){
    this.setState({
      html: this.props.videos.html

    })
  },

  componentDidMount: function() {
    // this.handleUpdateHTML()
    console.log("videos", this.props.videos);
  },

  render: function(){

    // let myVideo = this.props.videos.map( (video, index) => {
    //     let str = video.embed.html;
    //     str.replace(/^"(.*)"$/, '$1');
    //     console.log("MY str converted", str);
    //     return <li key={index}>{str}</li>
    // })
    let myVideo = this.props.videos.html
    // console.log(myVideo);

    return(
      <div>
        <h3 className="title-box">DisplayVideo</h3>
        <div dangerouslySetInnerHTML={{__html: myVideo}}></div>
      </div>
    )
  }
});
export default DisplayVideo;

/////////works
const DisplayVideo = React.createClass({
  render: function(){
    const Styles = {
      width: '50%',
    }
    let myVideo = this.props.videos.map( (video, index) => {
        let iframe = video.embed.html;
        return <div className={videoWrapper} key={index} dangerouslySetInnerHTML={{__html: iframe}}></div>
    })
    return(
      <div>
        <h3 className="title-box">DisplayVideo</h3>
        <div >
          <ul>
            {myVideo}
          </ul>
        </div>
      </div>
    )
  }
});
export default DisplayVideo;
