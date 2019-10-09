import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from './actions';

const initialState = {
  users: [],
  fetching: false,
};

export default function (state=initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        fetching: true,
      };
      break;
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        users: action.payload,
      };
      break;
    case FETCH_USERS_FAILED:
      return {
        ...state,
        fetching: false,
        users: [],
      };
      break;
    default:
      return state;
  }
}
