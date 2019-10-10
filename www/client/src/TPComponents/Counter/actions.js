// Definition des types d'action
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
//
export function incrementCounter(dispatch) {
    return (dispatch) => dispatch({
        type: INCREMENT_COUNTER
    });
}
//
export function decrementCounter(dispatch) {
    return (dispatch) => dispatch({
        type: DECREMENT_COUNTER
    });
}
