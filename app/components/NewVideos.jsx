import React from 'react';

var NewVideos = React.createClass({
  render: function(){
    let iframe = this.props.url.map( (obj, index) => {
      let url = obj
      return  <iframe key={index} src={url} width='560' frameBorder="0" allowFullScreen />
    })
    return(
      <div>
        {iframe}
      </div>
    )
  }
})

module.exports = NewVideos;
