export const fetchNotifications = (user) => {
  return $.ajax({
    method: 'GET',
    url: `/api/user/${user.id}/notifications`
  });
};
export const createNotification = (user, notification) => {
  return $.ajax({
    method: 'POST',
    url: `/api/user/${user.id}/notifications`,
    data: { notification }
  });
};
export const deleteNotifications = (user) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${user.id}/notifications`
  });
};
