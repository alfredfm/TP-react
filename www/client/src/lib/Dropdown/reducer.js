import {
  REGISTER_DROPDOWN,
  OPEN_DROPDOWN,
  CLOSE_DROPDOWN,
} from './actions';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_DROPDOWN:
      return {
        [action.payload]: false,
      };
      break;
    case OPEN_DROPDOWN: {
        document.body.setAttribute('style', 'overflow-y: hidden');
        return {
          [action.payload]: true,
        };
      }
      break;
    case CLOSE_DROPDOWN: {
        document.body.setAttribute('style', 'overflow-y: auto');
        return {
          [action.payload]: false,
        };
    }
      break;
    default:
      return state;
  }
}
