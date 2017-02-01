import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

ReactDOM.render(

  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="Home" />
      <Route path="Home" component={Home}></Route>
      <Route path="About" component={About}></Route>
      <Route path="Contact" component={Contact}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
