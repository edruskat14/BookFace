import React from 'react';

const PostLike = (props) => {
  const thisPostLikes = props.postLikes.filter((like) => { return (like.post_id === props.post.id); });

  const alreadyLiked = thisPostLikes.filter((like) => {
    return like.liker_id === props.currentUser.id;
  });

  let likeButton = <button className='post-like-button' onClick={() => props.createPostLike(props.post, {liker_id: props.currentUser.id, post_id: props.post.id })}>Like
  </button>

  if (alreadyLiked.length > 0) {
    likeButton = <button className='post-unlike-button' onClick={() => props.deletePostLike(thisPostLikes[0])}>
    Unlike </button>;
  }
  let keyWord1 = 'person';
  let keyWord2 = 'likes';
  if (thisPostLikes.length > 1) { keyWord1 = 'people'; keyWord2 = 'like';}
  let sentence = `${thisPostLikes.length} ${keyWord1} ${keyWord2} this post!`

  if (thisPostLikes.length === 0) { sentence = null };

  return (
    <div>
      <p>{sentence}</p>
      {likeButton}
    </div>
  );
}

export default PostLike;
