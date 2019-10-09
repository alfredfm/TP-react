import React, { Component } from 'react';
import logo from '../../public/img/logo.png';
import RippleEffect from '../../lib/Ripple/RippleEffect';
import './style.css';
import { confs } from '../../conf';

const { PRIMARY_BG } = confs;

class Appbar extends Component {
  render() {
    const { icon, onClick, style, id, iconColor } = this.props
    return (
      <RippleEffect id={id} style={style} onClick={onClick && ((e) => onClick(e))} className={"icon-button"}>
        <a href=""><i style={{color: iconColor}} className={"fa fa-"+icon}></i></a>
      </RippleEffect>
    );
  }
}
;

export default Appbar;
