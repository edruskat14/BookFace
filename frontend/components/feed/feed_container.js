import Feed from './feed';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers, fetchFriends } from '../../actions/user_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import { fetchFriendships } from '../../actions/friendship_actions';
import { fetchAllComments } from '../../actions/comment_actions';
import { fetchNotifications } from '../../actions/notification_actions';
import { fetchNews } from '../../actions/news_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    posts: Object.values(state.entities.posts),
    pendingRequests: Object.values(state.entities.friendships.pending),
    approvedRequests: Object.values(state.entities.friendships.approved),
    allUsers: Object.values(state.entities.users.general),
    news: state.entities.news.articles
  };
};

const mdp = (dispatch) => {
  return {
    fetchFriendships: (id) => dispatch(fetchFriendships(id)),
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFriends: (id) => dispatch(fetchFriends(id)),
    fetchAllPosts: (userId, feed) => dispatch(fetchAllPosts(userId, feed)),
    fetchAllComments: (posts) => dispatch(fetchAllComments(posts)),
    fetchNotifications: (user) => dispatch(fetchNotifications(user)),
    fetchNews: () => dispatch(fetchNews())

  };
};

export default connect(msp, mdp)(Feed);
