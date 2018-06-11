import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-secondary">
        <h1 className="display-4 text-center text-light">
          DISTANCE CALCULATOR
        </h1>
        <br />
        <br />
        <p className="text-center text-white font-italic">
          FIND THE DISTANCE BETWEEN TWO PLACES IN SECONDS
        </p>
      </div>
    );
  }
}

export default Nav;
