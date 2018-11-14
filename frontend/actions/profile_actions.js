import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const fetchProfile = (id) => {
  return dispatch => {
    return ProfileApiUtil.fetchProfile(id).then((profile) => {
      return dispatch({ type: RECEIVE_PROFILE, profile })
    });
  };
};

export const updateProfile = (profile) => {
  return dispatch => {
    return ProfileApiUtil.updateProfile(profile).then((profile) => {
        return dispatch({ type: RECEIVE_PROFILE, profile });
    });
  };
};
