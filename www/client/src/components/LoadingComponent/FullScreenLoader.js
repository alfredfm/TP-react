import React, { Component } from 'react';
import { hexToRgbA } from '../../utils';
import { confs } from '../../conf';
import './style.css';

const { PRIMARY_BG } = confs;

class FullScreenLoader extends Component {
  render() {
    const style = {
      main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0px',
        zIndex: '10',
        background: 'rgba(0,0,0,.5)',
      },
    };
    const { color } = this.props||'white';
    return (
        <div className={"loader-container"} style={style.main}>
          <div className={"flexbox justify-content-center align-items-center"}>
            <div className={"btn-loader"}>
              <div className={"large-circle"} style={{borderColor: color}}></div>
              <div className={"small-circle"} style={{borderColor: color}}></div>
            </div>
          </div>
        </div>
    );
  }

}

export default FullScreenLoader;
