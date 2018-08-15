import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flight from './Flight';

class AllFlights extends Component {
    render() {
        return (
            <div>
                <h1>All Flights</h1>
                {this.props.flights.map((flight) => <Flight key={flight.number} flight={flight} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state
    }
}

export default connect(mapStateToProps)(AllFlights);