import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = (props) => {
  return (
    <div className='post-main'>
      <header className='post-names'>
        <div className='postee-name'>
          {props.post.poster_id}
        </div>
        <img className='post-right-arrow' src={window.right_arrow_symbol} />
        <div className='poster-name'>
          {props.post.wall_id}
        </div>
      </header>
      <div className='post-body'>
        {props.post.body}
      </div>
    </div>
  );
};


export default PostIndexItem;
