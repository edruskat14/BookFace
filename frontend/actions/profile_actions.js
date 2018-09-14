import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE_UPDATE = 'RECEIVE_PROFILE_UPDATE';
export const RECEIVE_ALL_PROFILES ='RECEIVE_PROFILE';

export const fetchProfiles = () => {
  return dispatch => {
    return ProfileApiUtil.fetchProfiles().then((profiles) => {
      return dispatch({ type: RECEIVE_ALL_PROFILES, profiles });
    });
  };
};

export const updateProfile = (profile) => {
  return dispatch => {
    return ProfileApiUtil.updateProfile(profile).then((newProfile) => {
        return dispatch({ type: RECEIVE_PROFILE_UPDATE, newProfile });
    });
  };
};
