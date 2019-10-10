import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from "./actions";

const initialState = {
    value: 0,
};

export default function(state = initialState, action) {

    const newState = Object.assign({}, state);

    switch (action.type) {
        case INCREMENT_COUNTER:
            newState.value = state.value + 1;
            break;
        case DECREMENT_COUNTER:
            newState.value = state.value - 1;
            break;
    }

    return newState;
}