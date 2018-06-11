import React, { Component } from 'react';

import Nav from './Nav.js';
import Body from './Body.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Body />
      </div>
    );
  }
}

export default App;
