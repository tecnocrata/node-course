import React, { Component } from 'react';
import PostForm from './components/PostForm';
//import AllFlights from './AllFlights'; //AllPost


class App extends Component {
  render() {
    return (
    <div className="App">
        <PostForm />
        {/* <AllFlights /> */}
    </div>
    );
    }
  }
export default App;