import React, { Component } from 'react';

class Flight extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.flight.number}</h2>
      <p>{this.props.flight.origin}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
 }
}
export default Flight;