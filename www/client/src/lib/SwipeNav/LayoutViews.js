import React, { Component } from 'react';
import NavViews from './NavViews';
import Views from './Views';
import './style.css';

class LayoutViews extends Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    if (state.height !== window.innerHeight+'px') {
      return {
        height: window.innerHeight+'px',
      };
    }
    return null;
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({
      height: window.innerHeight+'px',
    });
  }

  render() {

    const { children, header, navs, views, bottomNavigation } = this.props;
    const Header = header;

    return (
      <div style={{height: this.state.height}} className={"layout-views--c"}>
        {/* include an header if is set */}
        {header && <Header {...header.props} />}
        {/* include navigation on top if is set */}
        {(navs && !this.props.hasOwnProperty("bottomNavigation")) && <NavViews navs={navs} />}
        {/* include views */}
        {views && <Views views={views} />}
        {/* include navigation on bottom if is set */}
        {(navs && this.props.hasOwnProperty("bottomNavigation")) && <NavViews navs={navs} />}
      </div>
    );
  }
}

export default LayoutViews;
