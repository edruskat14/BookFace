export const createPostLike = (post, post_like) => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts/${post.id}/post_likes`,
    data: { post_like }
  });
};

export const deletePostLike = (post_like) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/post_likes/${post_like.id}`,
    data: { post_like }
  });
};
