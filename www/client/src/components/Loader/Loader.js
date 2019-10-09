import React, { Component } from 'react';
import './style.css';

class Loader extends Component {
  
  render() {

    return (
      <div className="loader-large-circle" style={{background: 'rgba('+this.props.background+',.3)'}}>
        <div className="loader-small-circle" style={{background: 'rgba('+this.props.background+',1)'}}>
          <div className="loader-extra-small-circle">
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
