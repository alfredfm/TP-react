import { call, put, takeLatest } from 'redux-saga/effects';
import { users } from './api';

export function* fetchUsers (action) {
  try {
    const all = yield call(users.fetchUsers, action);
    yield put({type: 'FETCH_USERS_SUCCESS', payload: all});
  } catch (e) {
    yield put({type: 'FETCH_USERS_FAILED', payload:e.response.data});
  }
}

function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default usersSaga;
