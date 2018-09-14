import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = (props) => {
  return (
    <div>
      {props.post.body}
    </div>
  );
};


export default PostIndexItem;
