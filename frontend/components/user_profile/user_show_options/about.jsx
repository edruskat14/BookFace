import React from 'react';

const About = (props) => {
  const profile = props.all.profile;
  debugger
  const location = profile.location || 'N/A';
  const occupation = profile.occupation || 'N/A';
  const favoriteThing = profile.favorite_thing || 'undecided';
  let milkCereal = null;
  if (profile.milk_cereal === true) {
    milkCereal = 'I do cereal the right way';
  } else if (profile.milk_cereal === false) {
    milkCereal = 'Life'
  }
  let favSpeedLim =  null;
  if (profile.favorite_speed_limit){
    favSpeedLim = "The best speed limit is " + profile.favorite_speed_limit + 'mph'
  }
  const catchPhrase = profile.catch_phrase || null;

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
        <div className='about-section'>
          <p>Name: {firstname} {lastname}</p>
          <p>Birthday: {month} {day}, {year}</p>
          <p>Location: {location}</p>
          <p>Occupation: {occupation}</p>
          <p>My Favorite Thing: {favoriteThing}</p>
          <p>{milkCereal}</p>
          <p>{favSpeedLim}</p>
          <p>{catchPhrase}</p>
        </div>
    </div>
  )

}
export default About;
