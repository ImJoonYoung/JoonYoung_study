import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
        <div>
            {
                1 + 1 === 2
                ? '맞다' : '틀리다'
            }
        </div>
    )
  }
}

export default App;
