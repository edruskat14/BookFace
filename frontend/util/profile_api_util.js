// export const fetchProfiles = () => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/profiles`
//   });
// };

export const fetchProfile = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/profile`
  });
};

export const updateProfile =  (profile) => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/users/${profile.user_id}/profile`,
      data: { profile }
  });
};
