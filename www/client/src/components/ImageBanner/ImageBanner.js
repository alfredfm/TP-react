import React, { Component } from 'react';

const classes = {
  background: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px',
    positition: 'relative'
  },
  overlay: {
    background: 'rgba(0,0,0,.5)',
    color: 'white',
    positition: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
};
class ImageBanner extends Component {
  render() {
    const { children, height, image, style } = this.props;
    return (
      <div
        style={{
          ...classes.background,
          backgroundImage: 'url('+image+')',
          ...style,
        }}
        >
        <div style={classes.overlay}>
          { children }
        </div>
      </div>
    );
  }
}

export default ImageBanner;
