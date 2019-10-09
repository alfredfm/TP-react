import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { ripple } from './ripple';
import { hexToRgbA } from '../../utils';
import './style.css';

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

  getStyleSheet() {
    console.log(this.props.rippleColor);
    if (this.props.rippleColor) {
      return (
        <style>
          {'span.ripple--span { color: '+this.props.rippleColor+'}'}
        </style>
      )
    }
  }

  onClick(e) {
    e.preventDefault();
    const { onClick } = this.props;
    // Handle the given function
    if (onClick) { onClick(); }
  }

  render () {

    const { children, style, className, id, to } = this.props;

    if (to) {
      return (
        <Link {...this.props}>
          {children}
        </Link>
      );
    }

    return (
      <div
        id={id}
        ref={rippleButton => this.rippleButton=rippleButton}
        className={"ripple-effect "+(className)}
        style={style}
        onClick={(e) => this.onClick(e)}
      >
        { children }
        {this.getStyleSheet()}
      </div>
    );
  }
}

export default RippleButton;
