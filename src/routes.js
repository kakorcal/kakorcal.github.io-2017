import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Wikirace from './components/Wikirace'
import Angular_blog from './components/Angular_blog'
import Linguo from './components/Linguo'
import Bomberman from './components/Bomberman'
import Michael_baca from './components/Michael_baca'
import Sara_alterman from './components/Sara_alterman'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/wikirace' component={Wikirace} />
      <Route path='/angular_blog' component={Angular_blog} />
      <Route path='/linguo' component={Linguo} />
      <Route path='/bomberman' component={Bomberman} />
      <Route path='/michael_baca' component={Michael_baca} />
      <Route path='/sara_alterman' component={Sara_alterman} />
    </Route>
  </Router>
);