import React from "react";
import { incrementCounter } from "./actions";
import { connect } from 'react-redux';

class IncrementCounterButton extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.incrementCounter}
            >
                Increment
            </button>
        );
    }
}

export default connect(null, { incrementCounter })(IncrementCounterButton);