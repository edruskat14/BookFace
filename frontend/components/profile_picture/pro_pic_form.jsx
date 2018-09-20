import React from 'react';

class ProPicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { proPic: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ proPic: e.currentTarget.files[0] })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.proPic !== null) {
      const formData = new FormData();
      formData.append('user[photo]', this.state.proPic);
      debugger
      this.props.updateUser(this.props.currentUser, formData);
    }
  }

  render() {
    return (
      <form className='upload-pro-pic-form' onSubmit={this.handleSubmit}>
        <input type='file' onChange={this.handleChange}/>
        <input type='submit' value='Update' />
      </form>
    );
  }
};


export default ProPicForm;
