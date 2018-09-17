export const fetchFriendRequests = (user) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/friendships`
  });
};

export const makeFriendRequest = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: `/api/friendships`,
    data: { friendship }
  });
};

export const approveFriendRequest = (friendship) => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/friendships/${friendship.id}`,
      data: { friendship }
  });
};

export const removeFriend = (friendship) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${friendship.id}`,
    data: { friendship }
  });
};
