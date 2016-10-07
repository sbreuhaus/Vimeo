import React from 'react';
import HelpersAuth from 'HelpersAuth';

var VideoForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    console.log("clicked");
    // let location = this.refs.location.value;
    // console.log(location);
    // HelpersAuth.checkForToken();
    // HelpersAuth.getVideo();
    this.props.onSearch();
  },

  componentDidMount: function(){
    console.log("Form mounted");
  },

  render: function(){
    return(
      <div>
        <h1>Video Form</h1>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='category' placeholder='video category'/>
          <button>Get Videos</button>
        </form>
      </div>
    )
  }
})

module.exports = VideoForm
