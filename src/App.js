import React, { Component } from 'react';
import './App.css';
import Header from './containers/header';
import Main from './containers/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}
