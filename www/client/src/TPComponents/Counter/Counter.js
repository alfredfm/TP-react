import React from 'react';
import IncrementCounterButton from './IncrementCounterButton';
import DecrementCounterButton from "./DecrementCounterButton";
import { initCounter } from "./actions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Drawer from '../../TPLib/Drawer/Drawer';
import ToggleDrawer from '../../TPLib/Drawer/DrawerButton';

class Counter extends React.Component {

    componentDidMount() {
        this.props.initCounter(this.props.initValue);
    }

    render() {
        return (
            <div>
                Current counter: {this.props.counter_value}
                <IncrementCounterButton />
                <DecrementCounterButton />
            </div>
        )
    }
}

Counter.propTypes  = {
    initValue: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
    counter_value: state.counter.value,
});

export default connect(mapStateToProps, { initCounter })(Counter);
