import React, { Component } from 'react';
import Sidebar from './sidebar';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <h1 className="App-title">Счетчик тащит нереально</h1>
      </div>
    );
  }
}
