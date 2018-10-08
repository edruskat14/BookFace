import React from 'react';
import { connect } from 'react-redux';
import { deleteComment }  from '../../actions/comment_actions';
import { Link } from 'react-router-dom';
import { fetchAllPosts } from '../../actions/post_actions';

const msp = (state, ownProps) => {
  return {
    commenter: state.entities.users.general[ownProps.comment.commenter_id]
  };
};

const mdp = (dispatch) => {
  return {
    deleteComment: (com) => dispatch(deleteComment(com)),
    fetchAllPosts: (id, val) => dispatch(fetchAllPosts(id, val))
  };
};

const CommentIndexItem = (props) => {
  let delButton = <div className='comment-del-dummy'></div>;
  const commenter = props.commenter || { id : null, username: '' }

  if (props.currentUser.id === props.comment.commenter_id) {
    delButton =   <button onClick={() => props.deleteComment(props.comment)} className='delete-comment-button'>Remove</button>
  }
  return (
    <div className='comment-all'>
      <div className='comment-main'>
        <header className='comment-name'>
          <Link to={`/users/${commenter.id}`} className='comment-name-link'>
            {commenter.username}
          </Link>
        </header>
        <div className='comment-body'>
          {props.comment.body}
        </div>
      </div>
      <div className='delete-comment-div'>
        {delButton}
      </div>
    </div>
  );
};


export default connect(msp, mdp)(CommentIndexItem);
