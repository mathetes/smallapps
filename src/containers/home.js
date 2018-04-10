import React, { Component, Link } from 'react';
import Sidebar from './sidebar';

export default class Home extends Component {
  render() {
    return (
        <div>
          <Sidebar />
          <h1 className="App-title">Роут на главную. Он робит, робит</h1>
        </div>

    );
  }
}
