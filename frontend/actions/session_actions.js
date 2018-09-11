import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login(user) = (user) => {
  return dispatch => {
    return SessionApiUtil.login(user).then((user) => {
      return dispatch({type: RECEIVE_CURRENT_USER, user })
    });
  };
};

export const logout() = () => {
  return dispatch => {
    return SessionApiUtil.logout().then(() => {
      return dispatch({type: LOGOUT_CURRENT_USER})
    });
  };
};

export const signup(user) = (user) => {
  return dispatch => {
    return SessionApiUtil.signup(user).then((user) => {
      dispatch({type: RECEIVE_CURRENT_USER, user })
    });
  };
};

export const receiveErrors(errors) = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}
