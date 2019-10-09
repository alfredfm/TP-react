import {
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
} from './actions';

const initialState = {
  open: true,
};

export default function (state= initialState, action) {
  switch (action.type) {
    case SHOW_SNACKBAR: {
        return {
          label: action.payload.label,
          type: action.payload.type,
          onEnd: action.payload.onEnd,
          onStart: action.payload.onStart,
          button: action.payload.button,
          float: action.payload.float,
          open: true,
        };
      }
      break;
    case HIDE_SNACKBAR:
      return { open: false };
      break;
    default:
      return state;
      break;
  }
}
