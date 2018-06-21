import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Scenes
import App_es from '/home/danielmp96/powercars/src/components/App_es.js';
import App_com from '/home/danielmp96/powercars/src/components/App_com.js';
import App_post from 'home/daniellmp96/powercars/src/components/App_post.js';

const routes = (
  <Router>
    <div>
      <Route path="/" component={App_es} exact/>
      <Route path="/comment" component={App_com} exact/>
      <Route path="/post" component={App_post} exact/>
    </div>
  </Router>
)

export default routes
