import React, { Component } from 'react';
import NavItem from './NavItem';
import { connect } from 'react-redux';
import { setIndex } from './actions';
import { confs } from '../../conf';

const { PRIMARY_BG } = confs;

class NavViews extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { navs, index, setIndex } = this.props;
    return (
      <div className={"nav-views--c"} style={{backgroundColor: PRIMARY_BG}}>
        {
          navs && navs.map((nav, key) => (
            <NavItem
              key={key}
              icon={nav.icon}
              title={nav.title}
              animated={nav.animated}
              active={key===index}
              onClick={() => setIndex(key)}
            />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.swipeViews.index,
});

export default connect(mapStateToProps, { setIndex })(NavViews);
