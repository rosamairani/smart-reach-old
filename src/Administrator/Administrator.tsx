import React, { Component } from 'react';
import temp from './AConsensus.jpg';

class Administrator extends Component {
  render() {
    return (
        // this web Administrator will be different from 
      <div className="Administrator">
        <img src={temp} className="temp-image" alt="logo" />
      </div>
    );
  }
}

export default Administrator;