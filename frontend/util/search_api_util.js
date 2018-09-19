export const searchUsers = (string) => {
  return $.ajax({
    method: 'GET',
    url: `/api/searches/?string=${string}`
  });
};
