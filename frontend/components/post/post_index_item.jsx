import React from 'react';
import { Link } from 'react-router-dom';
import CreateCommentFormContainer from '../comments/create_comment_form_container';
import CommentIndexItem from '../comments/comment_index_item';
import PostLikeContainer from '../likes/post_like_container';
const PostIndexItem = (props) => {
  let com = null;
  if (props.comments) {
    com = props.comments.map((comment) => {
      return <CommentIndexItem comment={comment} post={props.post} currentUser={props.currentUser} key={comment.id}/> }
      )}

      const poster = props.poster || { username: '' }
      const postee = props.postee || { username: '' }

      const postDate = new Date(props.post.created_at).toString().split(' ').slice(1, 4).join(' ');
  return (
    <div className='post-main'>
        <div className='post-names'>
          <div className='postee-name'>
            <Link to={`/users/${poster.id}`} className='post-name-link'>
              {poster.username}
            </Link>
          </div>
          <img className='post-right-arrow' src={window.right_arrow_symbol} />
          <div className='poster-name'>
            <Link to={`/users/${postee.id}`} className='post-name-link'>
              {postee.username}
            </Link>
          </div>
        </div>
        <div className='post-date-posted'>
          {postDate}
        </div>
      <div className='post-body'>
        {props.post.body}
      </div>
      <div className='post-likes'>
        <PostLikeContainer post={props.post} poster={props.poster}/>
      </div>
      <div className='comments'>
        {com}
      </div>
      <div className='post-comment-section'>
        <CreateCommentFormContainer post={props.post} />
      </div>
    </div>
  );
};


export default PostIndexItem;
