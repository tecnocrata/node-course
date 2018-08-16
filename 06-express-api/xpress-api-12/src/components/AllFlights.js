import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flight from './Flight';
import EditFlight from './EditFlight';
import axios from 'axios';

class AllFlights extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/flights`)
      .then(res => {
        const fligths = res.data;
        this.setState({ fligths });
      })
    }

    render() {
        return (
            <div>
                <h1>All Flights</h1>
                {this.props.flights.map(flight=> 
                    (
                        <div key={flight.id}>
                            {flight.editing ? <EditFlight flight={flight} key={flight.id} /> :
                                <Flight key={flight.number} flight={flight} />}
                        </div>
                    )                    
                )}
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