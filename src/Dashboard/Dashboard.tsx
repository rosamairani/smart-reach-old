import React, { Component } from 'react';
import temp from './universe.jpg';
import './Dashboard.css';
import Shortcuts from './Shortcuts';

class Dashboard extends Component {
  render() {
    return (
        // this web dashboard will be different from 
      <div className="dashboard">
        {/* <img src={temp} className="temp-image" alt="logo" /> */}
      <Shortcuts></Shortcuts>
      </div>
    );
  }
}

export default Dashboard;