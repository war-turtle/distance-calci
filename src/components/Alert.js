import React, { Component } from 'react';

class Alert extends Component {
  render() {
    let value = 'Enter Two Cities';
    if (this.props.distance === -1) {
      value = 'Enter Two Cities';
    } else if (this.props.distance === -2) {
      value = 'Enter Two Different Values';
    } else if (this.props.distance === -3) {
      value = "Can't Find Those Cities";
    } else {
      value =
        'Distance Between Entered Cities is ' +
        (this.props.distance / 1000).toFixed(2) +
        'Km';
    }
    return (
      <div className="alert alert-primary" role="alert">
        {value}
      </div>
    );
  }
}

export default Alert;
