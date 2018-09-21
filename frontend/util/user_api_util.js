export const fetchUsers = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/users'
  });
};

export const fetchFriends = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/?id=${id}`
  });
};

export const fetchUser = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/users/${id}`
  });
};

export const updateUser = (user, data) => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/users/${user.id}`,
      data: data,
      contentType: false,
      processData: false
  });
};
