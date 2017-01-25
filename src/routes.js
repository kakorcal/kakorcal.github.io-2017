import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Project from './components/Project'

// <Route path='/angular_blog' component={Project} />
export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/flash_anzan' component={Project} />
      <Route path='/wikirace' component={Project} />
      <Route path='/linguo' component={Project} />
      <Route path='/bomberman' component={Project} />
      <Route path='/michael_baca' component={Project} />
      <Route path='/sara_alterman' component={Project} />
    </Route>
  </Router>
);