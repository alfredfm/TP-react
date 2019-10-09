import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import { setIndex } from './actions';

const style = {
  container: {
    height: '100%',
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  }
}

class Views extends Component {

  render() {

    const { views, index, setIndex } = this.props;

    return (
      <SwipeableViews style={style.container} onChangeIndex={(newIndex) => setIndex(newIndex)} index={index} slideClassName={"views--c-slides"} resistance>
        { views && views.map( (view, key) => {
          const View = view
          return <View style={style.slide} key={key} />
        })}
      </SwipeableViews>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.swipeViews.index,
});

export default connect(mapStateToProps, { setIndex })(Views);
