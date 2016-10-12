import React from 'react';
var {Link} = require('react-router');


var About = (props) => {
  return(
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is simple app built on Node, React, and Foundation.  It Utilizes Vimeo to retrieve videos from a
      category specified by the user</p>
      <ul>
        <li>
          <a href='https://github.com/sbreuhaus/Vimeo'>Github!</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
