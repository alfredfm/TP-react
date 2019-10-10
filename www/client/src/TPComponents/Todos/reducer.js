import {
    /* Fetch */
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILED
    /* Post */,
    POST_TODO_SUCCESS,
} from "./actions";

const initialState = {
    isFetching: false,
    todos: [],
};

export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                isFetching: true,
            };
            break;
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                todos: action.payload,
            };
            break;
        case FETCH_TODOS_FAILED:
            return {
                ...state,
                isFetching: false,
                todos: [],
            };
            break;
        case POST_TODO_SUCCESS:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ],
            };
            break;
        default:
            return state;
            break;
    }
};