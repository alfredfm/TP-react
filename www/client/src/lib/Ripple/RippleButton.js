import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { ripple } from './ripple';
import { confs } from '../../conf';
import { hexToRgbA } from '../../utils';
import './style.css';

const { PRIMARY_BG } = confs;

class RippleButton extends Component {
  state = {
    width: 0,
    height: 0,
  };

  componentDidMount() {
    if (this.rippleButton) {
      this.rippleButton.addEventListener('click', ripple);
    }
  }

  onClick(e) {
    e.preventDefault();
    const { onClick } = this.props;
    // Handle the passed function
    if (onClick) { onClick(); }
  }

  render () {

    const { children, dark, type, to } = this.props;
    const style = {
      rippleButton: {
        borderRadius: '.3rem',
        background: 'rgba('+hexToRgbA(PRIMARY_BG)+', .8)',
        cursor: 'pointer',
        color: 'rgba(255, 255, 255, .6)',
        textAlign: 'center',
        padding: '.7rem .5rem',
      },
      ripple: {
        position: 'absolute',
        top: 0,
        left: 0,
        background: dark?'rgba(0, 0, 0, .01)':'rgba(255, 255, 255, .01)',
      },
      light: {
        borderRadius: '.3rem',
        display: 'block',
        textDecoration: 'none',
        background: 'rgba(255, 255, 255, .15)',
        cursor: 'pointer',
        color: 'rgba(255, 255, 255, .8)',
        textAlign: 'center',
        padding: '.7rem .5rem',
      }
    };

    if (to) {
      return (

          <Link
            className={"ripple-effect-link"}
            to={to}
          >
          <div
            style={type?style[type]:style.rippleButton}
            ref={rippleButton => this.rippleButton=rippleButton}
            className={"ripple-effect"}
          >
            {children}
          </div>
        </Link>
      );
    } else {
      return (
        <div
          ref={rippleButton => this.rippleButton=rippleButton}
          className={"ripple-effect"}
          style={type?style[type]:style.rippleButton}
          onClick={(e) => this.onClick(e)}
        >
          { children }
        </div>
      );
    }
  }
}

export default RippleButton;
