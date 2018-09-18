import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { deleteComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users.general[state.session.id],
    poster: state.entities.users.general[ownProps.post.poster_id],
    postee: state.entities.users.general[ownProps.post.wall_id],
    comments: Object.values(state.entities.comments).filter((com) =>{
      return com.post_id === ownProps.post.id;
    })
  };
};

export default connect(msp)(PostIndexItem);
