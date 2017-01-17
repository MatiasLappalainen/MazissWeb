import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import {StickyContainer, Sticky} from 'react-sticky';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
      <div className="full-screen" id="full"></div>
      </div>
    );
  }
}

export default App;
