export const FETCH_SOCIETE = 'FETCH_SOCIETE';
export const FETCH_SOCIETE_SUCCESS = 'FETCH_SOCIETE_SUCCESS';
export const FETCH_SOCIETE_FAILED = 'FETCH_SOCIETE_FAILED';
export const fetchSociete = (params) => ({
  type: FETCH_SOCIETE, payload: params
});

export const CHANGE_SOCIETE = 'CHANGE_SOCIETE';
export const changeSociete = (societe) => ({
  type: CHANGE_SOCIETE, payload: societe
});

export const FETCH_REPORTING = 'FETCH_REPORTING';
export const FETCH_REPORTING_SUCCESS = 'FETCH_REPORTING_SUCCESS';
export const FETCH_REPORTING_FAILED = 'FETCH_REPORTING_FAILED';
export const fetchReporting = (params) => ({
  type: FETCH_REPORTING, payload: params
});

export const TOGGLE_MODE = 'TOGGLE_MODE';
export const toggleMode = () => ({
  type: TOGGLE_MODE
})

export const CHANGE_CONFIG = 'CHANGE_CONFIG';
export const CHANGE_CONFIG_SUCCESS = 'CHANGE_CONFIG_SUCCESS';
export const CHANGE_CONFIG_FAILED = 'CHANGE_CONFIG_FAILED';
export const changeConfig = (params) => ({
  type: CHANGE_CONFIG, payload: params
});

export const FETCH_VRP = 'FETCH_VRP';
export const FETCH_VRP_SUCCESS = 'FETCH_VRP_SUCCESS';
export const FETCH_VRP_FAILED = 'FETCH_VRP_FAILED';
export const fetchVRP = () => ({
  type: FETCH_VRP
});

export const SELECT_VRP = 'SELECT_VRP';
export const selectVRP = (codvrp) => ({
  type: SELECT_VRP, payload: codvrp
});
