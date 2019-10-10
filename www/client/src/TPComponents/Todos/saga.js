import {
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILED,

    POST_TODO_SUCCESS,
    POST_TODO,
} from "./actions";
import { call, put, takeLatest } from 'redux-saga/effects';
import { todos } from './api';

export function* fetchTodos(action) {
    try {
        let res = yield call(todos.fetchTodos);
        yield put({type: FETCH_TODOS_SUCCESS, payload: res.payload});
    } catch (e) {
        yield put({type: FETCH_TODOS_FAILED});
        console.log(e)
    }
}

export function* postTodo(action) {
    try {
        let res = yield call(todos.postTodo, action.payload);
        yield put({type: POST_TODO_SUCCESS, payload: res.payload});
    } catch (e) {
        console.log(e)
    }
}



function* todosSaga() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
    yield takeLatest(POST_TODO, postTodo);
}

export default todosSaga;