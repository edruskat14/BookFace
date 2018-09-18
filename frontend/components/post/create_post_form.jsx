import React from 'react';

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', wall_id: this.props.pageOwner.id, poster_id: this.props.currentUser.id }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({body: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.props.pageOwner, this.state);
    this.props.createNotification({ user_id:this.props.pageOwner.id, message: `${this.props.currentUser.username} has commented on your wall.`});
    this.setState({body: ''})
  }

  render() {
    return (
      <form className='create-post-form' onSubmit={this.onSubmit}>
        <textarea className='create-post-text' onChange={this.handleChange}value={this.state.body}/>
        <input className='create-post-submit-button' type='submit' value='Post'/>
      </form>
    );
  }
}

export default CreatePostForm;
