import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from 'Main';
import Video from 'Video';
import About from 'About';

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();  //loads foundation

require('style!css!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component={About}></Route>
      <IndexRoute component={Video}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
