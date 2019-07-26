import React, { Component } from 'react';
import './App.css';
import DashboardNavigation from './DashboardNavigation/DashboardNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <DashboardNavigation></DashboardNavigation>
        </header>
      </div>
    );
  }
}

export default App;
