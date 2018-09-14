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
    this.setState({body: ''})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea onChange={this.handleChange}value={this.state.body}/>
        <input type='submit' value='Send It'/>
      </form>
    );
  }
}

export default CreatePostForm;
