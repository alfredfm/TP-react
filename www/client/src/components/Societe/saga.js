import { call, put, takeLatest } from 'redux-saga/effects';
import { societe } from './api';

export function* fetchReporting(action) {
  try {
    const reporting = yield call(societe.fetchReporting, action.payload);
    yield put({type: 'FETCH_REPORTING_SUCCESS', payload: reporting});
  } catch (e) {
    yield put({type: 'FETCH_REPORTING_FAILED'});
    yield put({ type: 'HIDE_SNACKBAR'});
    yield put({ type: 'SHOW_SNACKBAR', payload: {
        label: e,
        type: 'error',
        float: true,
      }
    });
  }
}

export function* changeConfig(action) {
  try {
    const newSociete = yield call(societe.changeConfig, action.payload);
    yield put({type: 'CHANGE_CONFIG_SUCCESS', payload: newSociete});
  } catch (e) {
    yield put({type: 'CHANGE_CONFIG_FAILED'});
    yield put({ type: 'HIDE_SNACKBAR'});
    yield put({ type: 'SHOW_SNACKBAR', payload: {
        label: e.response.data.status.msg,
        type: 'error',
        float: true,
      }
    });
  }
}

export function* fetchVRP(action) {
  try {
    const vrps = yield call(societe.fetchVRP);
    yield put({type: 'FETCH_VRP_SUCCESS', payload: vrps});
  } catch (e) {
    yield put({type: 'FETCH_VRP_FAILED', payload: e.response.data});
  }
}

function* societeSaga() {
  yield takeLatest('FETCH_REPORTING', fetchReporting);
  yield takeLatest('CHANGE_CONFIG', changeConfig);
  yield takeLatest('FETCH_VRP', fetchVRP);
}

export default societeSaga;
