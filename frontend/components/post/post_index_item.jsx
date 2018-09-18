import React from 'react';
import { Link } from 'react-router-dom';
import CreateCommentFormContainer from '../comments/create_comment_form_container';
import CommentIndexItem from '../comments/comment_index_item';

const PostIndexItem = (props) => {
  let com = null;
  if (props.comments) {
    com = props.comments.map((comment) => {
      return <CommentIndexItem comment={comment} post={props.post} currentUser={props.currentUser} key={comment.id}/> }
      )}
  return (
    <div className='post-main'>
      <header className='post-names'>
        <div className='postee-name'>
          <Link to={`/users/${props.poster.id}`} className='post-name-link'>
            {props.poster.username}
          </Link>
        </div>
        <img className='post-right-arrow' src={window.right_arrow_symbol} />
        <div className='poster-name'>
          <Link to={`/users/${props.postee.id}`} className='post-name-link'>
            {props.postee.username}
          </Link>
        </div>
      </header>
      <div className='post-body'>
        {props.post.body}
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
