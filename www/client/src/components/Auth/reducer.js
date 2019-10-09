import {
  // register actions
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  // login actions
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  // logout actions
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  // confirm actions
  CONFIRM,
  CONFIRM_SUCCESS,
  CONFIRM_FAILED,
} from './actions';

const initialeState = {
  user: {},
  fetching: false,
  confirmFetching: false,
  confirmed: false
};

export default function (state=initialeState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        fetching: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        fetching: false,
        user: action.payload.data,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        fetching: false,
        user: {},
      };
    // Login actions
    case LOGIN:
      return {
        ...state,
        fetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        confirmed: true,
        user: action.payload.user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        fetching: false,
        confirmed: false,
        user: {},
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        confirmed: false,
        user: {},
        societes: [],
        default_societe: {},
        curent_societe: {},
      };
    case CONFIRM:
      return {
        ...state,
        confirmed: false,
        confirmFetching: true,
      };
    case CONFIRM_SUCCESS:
      return {
        ...state,
        confirmed: true,
        confirmFetching: false,
        user: {...state.user, ...action.payload},
      };
    case CONFIRM_FAILED:
      return {
        ...state,
        confirmFetching: false,
        confirmed: false,
        user: {},
      };
    default:
      return state;
  }
}
