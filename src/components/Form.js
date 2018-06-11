import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.firstCityChange = this.firstCityChange.bind(this);
    this.secondCityChange = this.secondCityChange.bind(this);
  }

  firstCityChange(e) {
    this.props.handleFirstChange(e.target.value);
  }

  secondCityChange(e) {
    this.props.handleSecondChange(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="form-row">
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control form-control-lg is-valid mb-3"
              placeholder="First City"
              onChange={this.firstCityChange}
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control form-control-lg is-valid mb-1"
              placeholder="Second City"
              onChange={this.secondCityChange}
            />
          </div>
        </div>
        <div className="text-success">
          Enter Two Cities Input Can Be In The Form Of Rewari, Haryana, India
        </div>
      </div>
    );
  }
}

export default Form;
