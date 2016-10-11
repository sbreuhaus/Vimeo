import React from 'react';
import HelpersAuth from 'HelpersAuth';

var VideoForm = React.createClass({
  getInitialState: function(){
    return {
      dropDownSelection: undefined
    }
  },
  handleChange: function(e){
    console.log("HANDLE");
    this.setState({
      dropDownSelection: e.target.value
    });
  },
  onFormSubmit: function(e){
    e.preventDefault();
    let category = this.state.dropDownSelection;
    console.log("CATEGORY", category);
    this.props.onSearch(category);
  },
  componentDidMount: function(){
    console.log("Form mounted");
  },
  render: function(){
    return(
      <div>
        <h1>Select a Category</h1>
        <form onSubmit={this.onFormSubmit}>
          <select value={this.state.dropDownSelection} onChange={this.handleChange}>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="comedy">Comedy</option>
            <option value="food">Food</option>
          </select>
          <p>{this.state.dropDownSelection}</p>
          <button>Get Videos</button>
        </form>
      </div>
    )
  }
})

module.exports = VideoForm
