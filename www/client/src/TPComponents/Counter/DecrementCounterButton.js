import React from "react";
import { connect } from 'react-redux';
import { decrementCounter } from './actions';

class DecrementCounterButton extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.decrementCounter}
            >
                Decrement
            </button>
        );
    }
}

export default connect(null, { decrementCounter })(DecrementCounterButton);