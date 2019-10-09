export const REGISTER = 'REGISTER';
export const register = (user) => ({
  type: REGISTER, payload: user
})
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const LOGIN = 'LOGIN';
export const login = (credentials) => ({
  type: LOGIN, payload: credentials
})
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT = 'LOGOUT';
export const logout = (access_token) => ({
  type: LOGOUT, payload: access_token
})
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const CONFIRM = 'CONFIRM';
export const confirm = (access_token) => ({
  type: CONFIRM, payload: access_token
})
export const CONFIRM_SUCCESS = 'CONFIRM_SUCCESS';
export const CONFIRM_FAILED = 'CONFIRM_FAILED';
