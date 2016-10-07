import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from 'Main';
import Video from 'Video';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Video}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
