import { Link } from 'react-router-dom';
import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';
import FloatingNavBarContainer from '../floating_nav_bar/floating_nav_bar_container';
import PostIndexItemContainer from '../post/post_index_item_container';
import FriendResponse from '../friend/friend_response';
import ProPicFormContainer from '../profile_picture/pro_pic_form_container';
import MakeNewFriendsItem from './make_new_friends_item';
import News from './news';

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.fetchFriendships(this.props.currentUser.id);
    this.props.fetchUsers();
    this.props.fetchFriends(this.props.currentUser.id);
    this.props.fetchAllPosts(this.props.currentUser.id, true);
    this.props.fetchNotifications(this.props.currentUser);
  }
  componentDidMount() {
    this.props.fetchNews();
  }

  activeFriendship(user) {
    return this.props.approvedRequests.some((ship) => {
      return (ship.friender_id === user.id && ship.friendee_id === this.props.currentUser.id) || (ship.friendee_id === user.id && ship.friender_id === this.props.currentUser.id)
    })
  }
  pendingFriendship(user) {
    return this.props.pendingRequests.some((ship) => {
      return ((ship.friender_id === user.id && ship.friendee_id === this.props.currentUser.id) || (ship.friendee_id === user.id && ship.friender_id === this.props.currentUser.id));
    })
  }

  findFriendsToSuggest() {
    const allUsers = this.props.allUsers;
    const suggested = [];
    allUsers.forEach((user) => {
      if (this.pendingFriendship(user) === false && this.activeFriendship(user) === false && this.props.currentUser !== user) {
        suggested.push(user)
      }
    })
    return suggested;
  }
  render() {
    const postsToRender = this.props.posts;
    postsToRender.sort(function(a, b){ return new Date(b.created_at) - new Date(a.created_at) });
    const posts = postsToRender.map((post) => {
      return <PostIndexItemContainer post={post} key={post.id}/>;
    });

    const suggesters = this.findFriendsToSuggest().slice(0, 6);
    const makeFriends = suggesters.map((user) => {
      return <MakeNewFriendsItem user={user} key={user.id} />
    })

    const articles = this.props.news;
    let news = articles || [];

    const latestNews = news.slice(10).map((arti) => {
      return <News article={arti} />
    })

    return (
      <div className='feed-all-content'>
        <div className='feed-main'>
          <FloatingNavBarContainer />
          <div className='feed-posts'>
            <CreatePostFormContainer pageOwner={this.props.currentUser}/>
            <br /><br />
            {posts}
          </div>
          <div className='feed-left'>
            <div>
              <h2 className='other-work-head'>My Other Work</h2>
              <a target='_blank' href='http://www.github.com/edruskat14'><button className='other-work-link'><img src={window.github_icon} className='other-work-img' />Github</button></a>
              <a target='_blank' href='https://www.edruskat14.live'><button className='other-work-link'><img src={window.smiley_face} className='other-work-img' />Portfolio</button></a>
              <a target='_blank' href='https://www.linkedin.com/in/ethan-druskat/'><button className='other-work-link'><img src={window.linkedin_icon} className='other-work-img' />LinkedIn</button></a>
            </div>
          </div>
          <div className='feed-right'>
            <h2 className='make-new-friends-header'>Make new friends</h2>
            <div className='feed-make-friends'>
              {makeFriends}
            </div>
            <div className='news-div'>
              <h2 className='news-header'>Breaking News</h2>
              {latestNews}
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    )
  }
}

// <img src={window.thumbs_up} className='thumbs-up-sponge'/>
export default Feed;

// const requests = this.props.pendingRequests.map((request) => {
//   if (request.friendee_id === this.props.currentUser.id) {
//     return <FriendResponse friendship={request} key={request.id}/>
//   }
// });
