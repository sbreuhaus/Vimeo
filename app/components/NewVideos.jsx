import React from 'react';

var NewVideos = React.createClass({
  render: function(){
    let iframe = this.props.url.map( (obj, index) => {
      let url = obj
      return  <div className="flex-video widescreen vimeo">
                <iframe key={index} src={url} width="400" height="225" frameBorder="0" allowFullScreen />
              </div>
    })
    return(
      <div>
        {iframe}
      </div>
    )
  }
})

module.exports = NewVideos;
