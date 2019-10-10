import {
    REGISTER_DRAWER,
    TOGGLE_DRAWER,
    CLOSE_DRAWER,
    DESTROY_DRAWER,
} from "./actions";

const initialState = {};

export default function (state = initialState, action) {

    let newState = Object.assign({}, state);

    switch (action.type) {
        case REGISTER_DRAWER:
            newState[action.payload] = {
                open: false,    // Valeur par defaut
            };
            break;
        case TOGGLE_DRAWER:
            newState[action.payload] = {
                open: !(state[action.payload].open),    // Valeur par defaut
            };
            break;
        case CLOSE_DRAWER:
            newState[action.payload] = {
                open: false,    // Valeur par defaut
            };
            break;
        case DESTROY_DRAWER:
            delete newState[action.payload];
            break;
    }

    return newState;
}