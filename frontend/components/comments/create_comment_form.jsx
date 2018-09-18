import React from 'react';

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', commenter_id: this.props.currentUser.id, post_id: this.props.post.id }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({body: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.props.post, this.state);
    this.props.createNotification({ user_id: this.props.post.poster_id, message: `${this.props.currentUser.username} has commented on your post.` })
    this.setState({body: ''});

  }

  render() {
    return (
      <form className='create-comment-form'       onSubmit={this.onSubmit}>
        <textarea className='create-comment-text' onChange={this.handleChange}value={this.state.body} placeholder='Write a comment...' />
        <input className='create-comment-submit-button' type='submit' value='Comment' />
      </form>
    );
  }
}

export default CreateCommentForm;
