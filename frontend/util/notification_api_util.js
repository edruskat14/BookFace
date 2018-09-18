export const fetchNotifications = (user) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/notifications`
  });
};
export const createNotification = (notification) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${notification.user_id}/notifications`,
    data: { notification }
  });
};
export const deleteNotifications = (user) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${user.id}/notifications`
  });
};
