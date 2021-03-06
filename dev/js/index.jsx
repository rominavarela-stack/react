import '../style/style.css'
import React, { Component } from 'react';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import CreateView from './views/create.jsx';
import AllView from './views/all.jsx';

render(
  <Router history={hashHistory}>
    <Route path="create" component={CreateView}/>
    <Route path="all" component={AllView}/>
  </Router>
, document.getElementById('content'));
