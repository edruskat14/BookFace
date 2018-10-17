import React from 'react';
import PostIndexItemContainer from '../../post/post_index_item_container';
import CreatePostFormContainer from '../../post/create_post_form_container';

const Timeline = (props) => {
  let posts = null;
  let postForm = <p>Befriend {props.pageOwner.username} to share posts with them!</p>;
  const postsToRender = props.all.posts;
  postsToRender.sort(function(a, b){ return new Date(b.created_at) - new Date(a.created_at) });
  if (props.all.friendsWith || props.pageOwner === props.all.currentUser) {
    posts = postsToRender.map((post) => {
      return <PostIndexItemContainer post={post} key={post.id}/>;
    });
    postForm = <CreatePostFormContainer pageOwner={props.pageOwner} />;
  }
  return (
    <div className='show-page-post-section'>
      {postForm}
      <br /><br />
      {posts}
    </div>
  )

}
export default Timeline;
