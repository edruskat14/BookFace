export const fetchAllPosts = (user_id, feed) => {

  return $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/posts/?feed=${feed}`
  });
};

// export const fetchPost = (post) => {
//   return $.ajax({
//     method: 'GET',
//     url: ``
//   });
// };

export const createPost = (user, post) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/posts`,
    data: { post }
  });
};

export const updatePost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post }
  });
};

export const deletePost = (post) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${post.id}`
  });
};
