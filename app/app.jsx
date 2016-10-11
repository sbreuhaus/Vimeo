import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from 'Main';
import Video from 'Video';

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();  //loads foundation

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Video}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
