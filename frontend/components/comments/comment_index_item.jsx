import React from 'react';
import { connect } from 'react-redux';
import { deleteComment }  from '../../actions/comment_actions';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    commenter: state.entities.users.general[ownProps.comment.commenter_id]
  };
};

const mdp = (dispatch) => {
  return {
    deleteComment: (com) => dispatch(deleteComment(com))
  };
};

const CommentIndexItem = (props) => {
  let delButton = null;
  const commenter = props.commenter || { id : null, username: '' }
  if (props.currentUser.id === props.comment.commenter_id) {
    delButton =   <button onClick={() => props.deleteComment(props.comment)} className='delete-comment-button'>Remove</button>
  }
  return (
    <div className='comment-main'>
      <header className='comment-name'>
        <Link to={`/users/${commenter.id}`} className='comment-name-link'>
          {commenter.username}
        </Link>
      </header>
      <div className='comment-body'>
        {props.comment.body}
      </div>
      {delButton}
    </div>
  );
};


export default connect(msp, mdp)(CommentIndexItem);
