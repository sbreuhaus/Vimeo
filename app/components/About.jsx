import React from 'react';
var {Link} = require('react-router');


var About = (props) => {
  return(
    <div>
      <h1 className='text-center page-title'>About</h1>
      <h3>This is an app built on Node, React, and Foundation. The AJAX request sends back an array of 50 videos which are then shuffled to return 3 random videos which are displayed.  The user can push new videos videos to display until the array is empty.</h3>
      <ul>
        <li>
          <a href='https://github.com/sbreuhaus/Vimeo'>Check out the code on Github!</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
