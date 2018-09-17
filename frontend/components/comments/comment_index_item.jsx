import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = (props) => {
  return (
    <div className='comment-main'>
      <header className='comment-name'>
        {props.comment.commenter_id}
      </header>
      <div className='comment-body'>
        {props.comment.body}
      </div>
    </div>
  );
};


export default CommentIndexItem;
