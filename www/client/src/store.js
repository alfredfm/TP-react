import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/* import functions that make the store persistent */
import { loadState, saveState } from './localStorage';
import { isMobile } from './utils';
import createReducer from './reducers';
/* SAGAS HERE */
import createSagaMiddleware from 'redux-saga'
import { rootSagas } from './sagas';

/* Prepare sagas Middleware */
const sagaMiddleware = createSagaMiddleware();

export const initializeSagas = () => {
  sagaMiddleware.run(rootSagas);
};

/* Redux thunk middleware */
const middleware = [thunk];

export const initializeStore = () => {

  const initialState = loadState();

  const store = createStore(
    createReducer(),
    initialState,
    getMiddleWare()
  );

  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;

};



function getMiddleWare() {
  if ((!process.env.NODE_ENV || process.env.NODE_ENV === 'development') /*&& !isMobile()*/) {
    return compose(
        applyMiddleware(...middleware, sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // Activate the extension
      );
  }else {
      return applyMiddleware(...middleware, sagaMiddleware);
  }
}
