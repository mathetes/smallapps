import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Counter from './counter';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/counter' component={Counter}/>
        </Switch>
      </main>
    );
  }
}
