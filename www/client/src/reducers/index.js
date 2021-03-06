import { combineReducers } from 'redux';
/* Reducers import */
import swipeViewsReducer from '../lib/SwipeNav/reducer';
import authReducer from '../components/Auth/reducer';
import snackbarReducer from '../lib/Snackbar/reducer';
import dropdownReducer from '../lib/Dropdown/reducer';
import societeReducer from '../components/Societe/reducer';
import usersReducer from '../components/Users/reducer';
import counterReducer from '../TPComponents/Counter/reducer';
import todosReducer from '../TPComponents/Todos/reducer';
import drawerReducer from '../TPLib/Drawer/reducer';

const createReducer = asyncReducers =>
  combineReducers({
    counter: counterReducer,
    drawers: drawerReducer,
    todos: todosReducer,
  });

export default createReducer;
