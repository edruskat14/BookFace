export const fetchAllComments = (post) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${post.id}/comments`
  });
};

// export const fetchComment = (comment) => {
//   return $.ajax({
//     method: 'GET',
//     url: ``
//   });
// };

export const createComment = (post, comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts/${post.id}/comments`,
    data: { comment }
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  });
};

export const deleteComment = (comment) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  });
};
