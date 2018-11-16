import React from 'react';

const About = (props) => {
  const profile = props.all.profile;
  const location = profile.location || 'N/A';
  const occupation = profile.occupation || 'N/A';
  const favoriteThing = profile.favorite_thing || 'undecided';
  let milkCereal = null;
  if (profile.milk_cereal === true) {
    milkCereal = 'I do cereal the right way.';
  } else if (profile.milk_cereal === false) {
    milkCereal = 'I should be banned from cereal.';
  }
  let favSpeedLim;
  if (profile.favorite_speed_limit) {
    favSpeedLim = profile.favorite_speed_limit + 'mph'
  } else {
    favSpeedLim = 'undecided';
  }
  const catchPhrase = profile.catch_phrase || null;

  let editButton = null;
  if (props.all.currentUser === props.all.pageOwner) {
    editButton = <button value='EditAbout' onClick={props.handleState} className='edit-about-about' >
      <img src={window.edit_about} className='edit-about-about-pic'/>
    </button>
  }

  let firstname = props.all.pageOwner.firstname;
  let lastname = props.all.pageOwner.lastname;
  if (firstname === '' && lastname === '') {
    firstname = 'N/A';
  }
  let day = props.all.pageOwner.day;
  let month = props.all.pageOwner.month;
  let year = props.all.pageOwner.year;
  if (day === '' || month === '' || year === '') {
    day = 'N/A';
    month = '';
    year = '';
  }

  return (
    <div className='show-page-post-section'>
        {editButton}
        <div className='about-section'>
          <div className='about-piece'>
            <p className='about-label'>Name: </p>
            <p className='about-response'>{firstname} {lastname}</p>
          </div>
          <div className='about-piece'>
            <p className='about-label'>Birthday: </p>
            <p className='about-response'>{month} {day}, {year}</p>
          </div>
          <div className='about-piece'>
            <p className='about-label'>Location:</p>
            <p className='about-response'>{location}</p>
          </div>
          <div className='about-piece'>
            <p className='about-label'>Occupation: </p>
            <p className='about-response'>{occupation}</p>
          </div>
          <div className='about-piece'>
            <p className='about-label'>Favorite Speed Limit:</p>
              <p className='about-response'>{favSpeedLim}</p>
          </div>
          <div className='about-piece'>
            <p className='about-label'>My Favorite Thing: </p>
            <p className='about-response'>{favoriteThing}</p>
          </div>
          <div className='about-piece'>
            <p className='about-label'>{milkCereal}</p>
          </div>
            <p className='about-catch-phrase'>{catchPhrase}</p>
        </div>
    </div>
  )

}
export default About;
