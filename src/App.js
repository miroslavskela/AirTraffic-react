import React, { Component, Fragment } from 'react';
import Main from './app/flights/Main'
import MainSingle from './app/singleFlight/MainSingle'
import {Switch, Route} from 'react-router-dom'
import Header from './app/partials/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/flight/:id" component={MainSingle}/>
      </Switch>
      </Fragment>
    );
  }
}

export default App;
