import { call, put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';
import { auth } from './api';

// register
export function* register (action) {
  try {
    let userRegistered  = yield call(auth.register, action.payload);
    yield put({type: 'REGISTER_SUCCESS', payload: userRegistered});
  } catch (e) {
    yield put({type: 'REGISTER_FAILED', payload: e})
  }
}
// login
export function* login (action) {
  try {
    let authed  = yield call(auth.login, action.payload);
    yield put({type: 'LOGIN_SUCCESS', payload: authed});
    if (authed.user.role > 1) {
      console.log('authed.user.role > 1 ', authed.user.role > 1
     );
      yield put({type: 'SELECT_VRP', payload: authed.user.codvrp});
    }
    yield put({type: 'FETCH_SOCIETE_SUCCESS', payload: authed.societe_informations});
  } catch (e) {
    yield put({type: 'LOGIN_FAILED', payload: e})
    yield put({ type: 'HIDE_SNACKBAR'});
    yield put({ type: 'SHOW_SNACKBAR', payload: {
        label: 'Oups... Problème d\'authentification!',
        type: 'error',
        float: true,
      }
    });
  }
}
// logout
export function* logout (action) {
  try {
    let logedOut  = yield call(auth.logout, action.payload);
    yield put({type: 'LOGOUT_SUCCESS', payload: logedOut});
  } catch (e) {
    yield put({type: 'LOGOUT_FAILED', payload: e})
  }
}
// confirm
export function* confirm (action) {
  try {
    let confirmedUser  = yield call(auth.confirm, action.payload);
    yield put({type: 'CONFIRM_SUCCESS', payload: confirmedUser});
  } catch (e) {
    yield put({type: 'CONFIRM_FAILED', payload: e})
  }
}

function* authSaga() {
  yield takeLatest('REGISTER', register);
  yield takeLatest('LOGIN', login);
  yield takeLatest('LOGOUT', logout);
  yield takeLatest('CONFIRM', confirm);
}

export default authSaga;
