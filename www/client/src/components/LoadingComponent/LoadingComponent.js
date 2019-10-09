import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import { hexToRgbA } from '../../utils';
import { confs } from '../../conf';
import './style.css';

const { PRIMARY_BG } = confs;

class LoadingComponent extends Component {
  render() {
    const { color } = this.props;
    return (
      <div id="loading-component">
        <Loader background={hexToRgbA(color||PRIMARY_BG)}/>
      </div>
    );
  }

}

export default LoadingComponent;
