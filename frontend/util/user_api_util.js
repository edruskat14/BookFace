export const fetchUsers = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/users'
  });
};

export const fetchFriends = (user) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/?id=${user.id}`
  });
};

export const fetchUser = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/users/${id}`
  });
};

export const updateUser = (user, data) => {
  debugger
  return $.ajax({
      method: 'PATCH',
      url: `/api/users/${user.id}`,
      data: data,
      contentType: false,
      processData: false
  });
};
