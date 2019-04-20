import React, { Component } from 'react';
import temp from './universe.jpg';

class Dashboard extends Component {
  render() {
    return (
        // this web dashboard will be different from 
      <div className="Dashboard">
        <img src={temp} className="temp-image" alt="logo" />
      </div>
    );
  }
}

export default Dashboard;