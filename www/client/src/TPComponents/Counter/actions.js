// Definition des types d'action
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const INIT_COUNTER = 'INIT_COUNTER';
//

export const incrementCounter = () => dispatch => dispatch({
    type: INCREMENT_COUNTER
});
//
export const decrementCounter = () => dispatch => dispatch({
    type: DECREMENT_COUNTER
});
//
export const initCounter = (init_value) => dispatch => dispatch({
    type: INIT_COUNTER,
    payload: init_value,
});

