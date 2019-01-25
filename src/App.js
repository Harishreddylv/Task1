import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Headercomp from './Headercomp';
import Viewcomp from './Viewcomp';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Headercomp />
          <div className="maincontainer">
              <Viewcomp />
          </div>
      </div>
    );
  }
}

export default App;
