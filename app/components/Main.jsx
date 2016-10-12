import React from 'react';
import Nav from 'Nav';

var Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className="row">
        <div className="large-8 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
