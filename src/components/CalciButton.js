import React, { Component } from 'react';
import axios from 'axios';

import Alert from './Alert';

class CalciButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { distance: -1 };
  }

  handleClick() {
    if (this.props.firstCity === '' || this.props.secondCity === '') {
      this.setState({ distance: -1 });
    } else if (this.props.firstCity === this.props.secondCity) {
      this.setState({ distance: -2 });
    } else {
      axios
        .post(
          `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${
            this.props.firstCity
          }&destinations=${
            this.props.secondCity
          }&mode=driving&language=fr-FR&key=AIzaSyACfsiNuZLKLiekFKfDobuf6c5h5sBXYEk`
        )
        .then(res => {
          if (res.data.rows[0].elements[0].status === 'OK') {
            this.setState({
              distance: res.data.rows[0].elements[0].distance.value
            });
          } else {
            console.log('error');
            this.setState({ distance: -3 });
          }
        })
        .catch(err => {
          this.setState({ distance: -1 });
        });
    }
  }
  render() {
    return (
      <div>
        <Alert distance={this.state.distance} />
        <div className="row">
          <div className="col-12">
            <button
              type="button"
              className="btn btn-success btn-block btn-lg"
              onClick={this.handleClick}>
              Calculate
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalciButton;
