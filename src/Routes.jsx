import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Components/MainPage';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ MainPage } />
      </Switch>
    )
  }
}
