import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideSnackbar } from './actions';
import './style.css';
import { Link } from 'react-router-dom';

const classes = {
  success: {
    background: '#5c915a',
    color: 'white',
  },
  error: {
    background: '#a85050',
    color: 'white',
  }
}

class Snackbar extends Component {
  state = {
    timer: null,
  };

  hideSnackbar() {
    //
    if (this.snackbar) {
      document.body.style.marginBottom = this.snackbar.offsetHeight + "px";
    }
    //
    const { delay, onStart, onEnd } = this.props.snackbar;

    if (onStart) { onStart(); }

    let timer = setTimeout(() => {
      this.props.hideSnackbar();
      document.body.style.marginBottom = 0;
      if (onEnd) { onEnd(); }
      this.setState({ timer: null });
    }, (delay>0?delay:3000));

    this.setState({ timer });
  }

  render() {
    const { label, type, open, button, float } = this.props.snackbar;
    const { timer } = this.state;

    const className = "snackbar " + (type?type:'') + (open===true?' show': '');

    if (open && !timer) { this.hideSnackbar(); }

    return (
      <div ref={snackbar => this.snackbar = snackbar} className={className}>
        <div className={"snackbar-container"+(float===true?' float':'')}  style={classes[type]}>
          <div>
            { label }
          </div>
          {
            button &&
              <button onClick={button.onClick} to={button.to} type={button.type}>
                {button.label}
              </button>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  snackbar: state.snackbar,
});

export default connect(mapStateToProps, { hideSnackbar })(Snackbar);
