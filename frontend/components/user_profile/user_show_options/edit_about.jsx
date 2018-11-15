import React from 'react';

class EditAbout extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.all.profile || { location: '', catch_phrase: '', milk_cereal: '', favorite_thing: '', user_id: props.all.pageOwner.id };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return event => {
      this.setState({ [field]: event.target.value})
    };
  }
  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.all.updateProfile(this.state);
    this.props.handleState(e);
  }

  render() {
    debugger
    // const profile = this.props.all.profile || { location: undefined, catch_phrase: undefined, milk_cereal: undefined, favorite_thing: undefined };

    // const location = profile.location || '';
    // const catchPhrase = profile.catch_phrase || 'N/A';
    // const favoriteThing = profile.favorite_thing || 'N/A';
    // const milkCereal = profile.milk_cereal || null;
    //
    // let firstname = this.props.all.pageOwner.firstname;
    // let lastname = this.props.all.pageOwner.lastname;
    // if (firstname === '' && lastname === '') {
    //   firstname = 'N/A';
    // }
    // let day = this.props.all.pageOwner.day;
    // let month = this.props.all.pageOwner.month;
    // let year = this.props.all.pageOwner.year;
    // if (day === '' || month === '' || year === '') {
    //   day = 'N/A';
    //   month = '';
    //   year = '';
    // }
    return (
      <div className='show-page-post-section'>
          <form className='edit-about-form'>
            <label>Location:
              <input type='text' onChange={this.handleChange('location')} value={this.state.location} />
            </label>
            <br />
            <label>Favorite Thing:
              <input type='text' onChange={this.handleChange('favorite_thing')} value={this.state.favorite_thing} />
            </label>
            <br />
            <label>catch_phrase:
              <input type='text' onChange={this.handleChange('catch_phrase')} value={this.state.catch_phrase} />
            </label>
          <br />
          <input type='submit' value='About' onClick={this.handleSubmit} />
          </form>
      </div>
    )
  }
}
export default EditAbout;
