import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = (props) => {
  return (
    <div className='comment-main'>
      <header className='comment-name'>
        {props.comment.commenter_id}
      </header>
      <body className='comment-body'>
        {props.comment.body}
      </body>
    </div>
  );
};


export default CommentIndexItem;
