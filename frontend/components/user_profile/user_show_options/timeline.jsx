import React from 'react';
import PostIndexItemContainer from '../../post/post_index_item_container';
import CreatePostFormContainer from '../../post/create_post_form_container';
import MakeNewFriendsItem from '../../feed/make_new_friends_item';

const Timeline = (props) => {
  let posts = null;
  let postForm = <p>Befriend {props.pageOwner.username} to share posts with them!</p>;
  // const pageFriendships = props.all.friendships.filter((ship) => {
  //   return (
  //     (ship.friendee_id === props.pageOwner.id) || (ship.friender_id === props.pageOwner.id)
  //   );
  // })
  // const pageFriends = [];
  // pageFriendships.forEach((ship) => {
  //   if (ship.friendee_id === props.pageOwner.id) {
  //     pageFriends.push()
  //   }
  // })
  // let nineFriends = pageFriends.slice(0, 8).map((ship) => {
  //
  // });
  // if (nineFriends.length === 0) {
  //   nineFriends = null;
  // }

  const nineFriends = props.all.pageFriends.slice(0, 9).map((friend) => {
    return <MakeNewFriendsItem user={friend} key={friend.id} />
  })

  const profile = props.all.profile || { location: undefined };

  const location = profile.location || 'N/A';
  let firstname = props.pageOwner.firstname;
  let lastname = props.pageOwner.lastname;
  if (firstname === '' && lastname === '') {
    firstname = 'N/A';
  }
  let day = props.pageOwner.day;
  let month = props.pageOwner.month;
  let year = props.pageOwner.year;
  if (day === '' || month === '' || year === '') {
    day = 'N/A';
    month = '';
    year = '';
  }

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
        <div className='mini-about'>
          <h3 className='info-show'>Info
            </h3>
            Name: {firstname} {lastname}
            <br />
            <br />
            Location: {location}
            <br />
            <br />
            DoB: {month} {day} {year}
            <h2 className='nine-friends-title'>Friends: {props.all.pageFriends.length}</h2>
            <div className='nine-friends'>
              {nineFriends}
            </div>
        </div>
    </div>
  )

}
export default Timeline;
