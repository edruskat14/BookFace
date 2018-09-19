import React from 'react';

const PostLike = (props) => {
  const thisPostLikes = props.postLikes.filter((like) => { return (like.post_id === props.post.id); });

  const alreadyLiked = thisPostLikes.filter((like) => {
    return like.liker_id === props.currentUser.id;
  });
  const likeAndNotify = () => {
    props.createPostLike(props.post, {liker_id: props.currentUser.id, post_id: props.post.id });
    props.createNotification({ user_id: props.poster.id, message: `${props.currentUser.username} has liked your post!` });
  }
  let likeButton = <button className='post-like-button' onClick={likeAndNotify}><img src={window.like_symbol} className='post-like-symbol' /> <p className='post-like-unlike' >Like</p> </button>

  if (alreadyLiked.length > 0) {
    likeButton = <button className='post-like-button' onClick={() => props.deletePostLike(alreadyLiked[0])}><img src={window.already_liked_symbol} className='post-like-symbol' /> <p className='post-like-unlike' >Unlike</p> </button>;
  }
  let keyWord1 = 'person';
  let keyWord2 = 'likes';
  if (thisPostLikes.length > 1) { keyWord1 = 'people'; keyWord2 = 'like';}
  let sentence = `${thisPostLikes.length} ${keyWord1} ${keyWord2} this post!`

  if (thisPostLikes.length === 0) { sentence = null };
  return (
    <div className='post-like-div'>
      <p className='post-like-sentence'>{sentence}</p>
      {likeButton}
      <p className='post-like-separator-line'></p>
    </div>
  );
}

export default PostLike;
