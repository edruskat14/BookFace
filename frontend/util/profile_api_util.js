export const fetchProfiles = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/profiles`
  });
};

export const updateProfile =  (profile) => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/users/${profile.user.id}/profile`,
      data: { profile }
  });
};
