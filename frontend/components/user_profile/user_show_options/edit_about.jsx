import React from 'react';

class EditAbout extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.all.profile;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCereal = this.handleCereal.bind(this);
  }

  handleChange(field) {
    return event => {
      this.setState({ [field]: event.target.value})
    };
  }

  handleCereal(e) {
    this.setState({ milk_cereal: e.target.value })
  }

  handleSpeed(e) {
    this.setState({ favorite_speed_limit: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.all.updateProfile(this.state);
    this.props.handleState(e);
  }

  render() {

    return (
      <div className='show-page-post-section'>
          <form className='edit-about-form'>
            <div className='edit-about-single'>
              <label>Location:
                <input type='text' className='edit-about-input' onChange={this.handleChange('location')} value={this.state.location} />
              </label>
            </div>
            <br />
            <div className='edit-about-single'>
              <label>Occupation:
                <input type='text' className='edit-about-input' onChange={this.handleChange('occupation')} value={this.state.occupation} />
              </label>
            </div>
          <br />
            <div className='edit-about-single'>
              <label>Favorite Thing:
                <input type='text' className='edit-about-input' onChange={this.handleChange('favorite_thing')} value={this.state.favorite_thing} />
              </label>
            </div>
            <br />
            <div className='edit-about-single'>
              <p className='milk-c-question'>You pour the cereal before the milk, right?</p>
              <label>
                <input type='radio' className='edit-about-radio' onChange={this.handleCereal} value={true} name='milk_cereal' />
                Y
              </label>
              <label>
                <input type='radio' className='edit-about-radio' onChange={this.handleCereal} value={false} name='milk_cereal' />
                N
              </label>
            </div>
            <br />
            <div className='edit-about-single'>
              <label>Favorite Speed Limit:
                <select type='text' className='edit-about-input' onChange={this.handleChange('favorite_speed_limit')} value={this.state.favorite_speed_limit}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='25'>25</option>
                <option value='30'>30</option>
                <option value='35'>35</option>
                <option value='40'>40</option>
                <option value='45'>45</option>
                <option value='45'>45</option>
                <option value='50'>50</option>
                </select>
              </label>
            </div>
            <br />
            <div className='edit-about-single'>
              <label>Catch Phrase:
                <input type='text' className='edit-about-input' onChange={this.handleChange('catch_phrase')} value={this.state.catch_phrase} />
              </label>
            </div>
          <br />
          <button type='submit' value='About' className='about-edit-submit' onClick={this.handleSubmit}>Update</button>
          </form>
      </div>
    )
  }
}
export default EditAbout;
