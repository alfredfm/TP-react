import { combineReducers } from 'redux';
/* Reducers import */
import swipeViewsReducer from '../lib/SwipeNav/reducer';
import authReducer from '../components/Auth/reducer';
import snackbarReducer from '../lib/Snackbar/reducer';
import dropdownReducer from '../lib/Dropdown/reducer';
import societeReducer from '../components/Societe/reducer';
import usersReducer from '../components/Users/reducer';

const createReducer = asyncReducers =>
  combineReducers({
    swipeViews: swipeViewsReducer,
    auth: authReducer,
    snackbar: snackbarReducer,
    dropdowns: dropdownReducer,
    societes: societeReducer,
    users: usersReducer,
  });

export default createReducer;
