import {
  FETCH_SOCIETE,
  FETCH_SOCIETE_SUCCESS,
  FETCH_SOCIETE_FAILED,
  //
  CHANGE_SOCIETE,
  //
  FETCH_REPORTING,
  FETCH_REPORTING_SUCCESS,
  FETCH_REPORTING_FAILED,
  //
  TOGGLE_MODE,
  //
  CHANGE_CONFIG,
  CHANGE_CONFIG_SUCCESS,
  CHANGE_CONFIG_FAILED,
  //
  FETCH_VRP,
  FETCH_VRP_SUCCESS,
  FETCH_VRP_FAILED,
  //
  SELECT_VRP,
} from './actions';

const initialState = {
  societes: [],
  default_societe: {},
  current_societe: {},
  reporting: {},
  vrps: [],
  selected_vrp: '',
  details_mode: false,
  fetching: false,
  fetching_reporting: false,
  fetching_vrps: false,
};

export default function(state=initialState, action) {
  switch (action.type) {
    case FETCH_SOCIETE:
      return {...state, fetching: true};
      break;
    case FETCH_SOCIETE_SUCCESS:
      return {
        ...state,
        fetching: false,
        societes: action.payload.societes,
        default_societe: action.payload.default_societe,
        current_societe: action.payload.current_societe,
      };
    case FETCH_SOCIETE_FAILED:
      return {...state, fetching: false};
      break;
    case FETCH_REPORTING:
      return {...state, fetching_reporting: true};
      break;
    case FETCH_REPORTING_SUCCESS:
      return {...state, fetching_reporting: false, reporting: action.payload};
      break;
    case FETCH_REPORTING_FAILED:
      return {...state, fetching_reporting: false};
      break;
    case CHANGE_SOCIETE:
      return {
        ...state,
        current_societe: state.societes.find(societe => societe.id == action.payload.id),
        selected_vrp: '',
      };
      break;
    case TOGGLE_MODE:
      return {...state, details_mode: !state.details_mode};
      break;
    case CHANGE_CONFIG:
      return state;
      break;
    case CHANGE_CONFIG_SUCCESS: {
        let indexSociete = state.societes.findIndex((societe) => societe.id === action.payload.id);
        if (indexSociete >= 0) {
          state.societes[indexSociete] = {...action.payload};
        }
        return {...state, current_societe: action.payload};
      }
      break;
    case CHANGE_CONFIG_FAILED:
      return state;
      break;
    case FETCH_VRP:
      return {...state, fetching_vrps: true};
      break;
    case FETCH_VRP_SUCCESS:
    return {...state, vrps: action.payload, fetching_vrps: false};
      break;
    case FETCH_VRP_FAILED:
      return {...state, fetching_vrps: false};
      break;
    case SELECT_VRP:
      return {...state, selected_vrp: action.payload};
      break;
    default:
      return state;
  }
}
