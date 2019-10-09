import { all } from 'redux-saga/effects';
import authSaga from '../components/Auth/saga';
import societeSaga from '../components/Societe/saga';
import usersSaga from '../components/Users/saga';


export function* rootSagas() {
  yield all ([
    authSaga(),
    societeSaga(),
    usersSaga(),
  ]);
}
