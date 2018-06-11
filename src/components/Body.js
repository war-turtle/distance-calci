import React, { Component } from 'react';

import Form from './Form';
import CalciButton from './CalciButton';

class Body extends Component {
  constructor(props) {
    super(props);
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleSecondChange = this.handleSecondChange.bind(this);
    this.state = { first: '', second: '' };
  }

  handleFirstChange(value) {
    // console.log(value);
    this.setState({ first: value });
  }

  handleSecondChange(value) {
    // console.log(value);
    this.setState({ second: value });
  }

  render() {
    return (
      <div>
        <Form
          handleFirstChange={this.handleFirstChange}
          handleSecondChange={this.handleSecondChange}
        />
        <br />
        <CalciButton
          firstCity={this.state.first}
          secondCity={this.state.second}
        />
      </div>
    );
  }
}

export default Body;
