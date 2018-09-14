export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user, profile: user.profile }
  })
};
export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user, profile: user.profile }
  })
};
export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
};
