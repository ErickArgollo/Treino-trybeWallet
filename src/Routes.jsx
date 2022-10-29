import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ChampionsDetails from './pages/ChampionsDetails';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route path="/champion/:id" component={ChampionsDetails} />
      </Switch>
    )
  }
}
