import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = (props) => {
  return (
    <div className='post-main'>
      <header className='post-names'>
        {props.post.poster_id}
        {props.post.wall_id}
      </header>
      <div className='post-body'>
        {props.post.body}
      </div>
    </div>
  );
};


export default PostIndexItem;
