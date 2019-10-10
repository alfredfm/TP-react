import React from 'react';
import IncrementCounterButton from './IncrementCounterButton';
import DecrementCounterButton from "./DecrementCounterButton";
import { connect } from 'react-redux';

class Counter extends React.Component {
    constructor(props) {
        super(props);
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

const mapStateToProps = (state) => ({
    counter_value: state.counter.value
});

export default connect(mapStateToProps, { })(Counter);
