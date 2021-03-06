import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
    profile: user.profile
  }
}

// export const login = (inputUser) => {
//   return dispatch => {
//     return SessionApiUtil.login(inputUser).then((user) => {
//       return dispatch(receiveCurrentUser(user))}, err => {
//         return dispatch(receiveErrors(err.responseJSON))
//       }
//     });
//   };
// };
export const login = user => dispatch => (
  SessionApiUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then((user) => {
      return dispatch({type: LOGOUT_CURRENT_USER})
    });
  };
};

// export const signup = (inputUser) => {
//   return dispatch => {
//     return SessionApiUtil.signup(inputUser).then((user) => {
//       return dispatch({type: RECEIVE_CURRENT_USER, user, profile: user.profile }), err => {
//         return dispatch(receiveErrors(err))
//       }
//     });
//   };
// };
export const signup = inputUser => dispatch => (
  SessionApiUtil.signup(inputUser).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}
