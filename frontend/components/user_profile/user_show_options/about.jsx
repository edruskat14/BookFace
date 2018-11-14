import React from 'react';

const About = (props) => {

  const profile = props.all.profile || { location: undefined, catch_phrase: undefined, milk_cereal: undefined, favorite_thing: undefined };

  const location = profile.location || 'N/A';
  const catchPhrase = profile.catch_phrase || 'N/A';
  const favoriteThing = profile.favorite_thing || 'N/A';
  const milkCereal = profile.milk_cereal || null;

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
          <p>Location: {location}</p>
          <p>Birthday: {month} {day}, {year}</p>
          <p>{milkCereal}</p>
          <p>{catchPhrase}</p>
          <p>{favoriteThing}</p>
        </div>
    </div>
  )

}
export default About;
