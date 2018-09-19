import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';





const Greeting = (props) => {
    return(

      <div>
        <header className='greet-header'>
          <div className='greet-header-content'>
            <h1 className='greet-h1'>BookFace</h1>
            <div className="greet-li-form">
              <LoginFormContainer />
            </div>
          </div>
        </header>
        <div className='greet-full'>
          <main className='greet-main'>
            <div className='greet-left'>
              <h2 className="connect-intro">Connect with friends and the world around you on BookFace.</h2>
              <div className='greet-pic-col'>
                <div className='greet-left-top'>
                  <img className='greet-left-img' src={window.session_top_pic}/>
                  <p className='greet-left-bold'>See photos and updates</p>
                  <p className='greet-left-light'> from friends in news feed</p>
                </div>
                <div className='greet-left-mid'>
                  <img className='greet-left-img' src={window.session_mid_pic}/>
                  <p className='greet-left-bold'>Share what's new</p>
                  <p className='greet-left-light'> in your life on your Timeline</p>
                </div>
                <div className='greet-left-bot'>
                <img className='greet-left-img' src={window.session_bot_pic}/>
                  <p className='greet-left-bold'>Find more</p>
                  <p className='greet-left-light'> of what you're looking for with BookFace search</p>
                </div>
              </div>
            </div>
            <div className='greet-right'>
              <div className='greet-su-form'>
                <SignupFormContainer />
              </div>
              <button className='demo-login-button' onClick={() => props.login({username: 'DemoUser', password: 'password'})}>Login Demo User</button>
            </div>
          </main>
        </div>
      </div>
    )
};






// const Greeting = (props) => {
//   if(!props.currentUser) {
//     return(
//       <div>
//         <Link to='/login'>Log In</Link>
//         <Link to='/signup'>Sign Up</Link>
//       </div>
//     )
//   } else {
//     return(
//       <div>
//         <h1>Welcome to BookFace!</h1>
//       </div>
//     )
//   }
// };

export default Greeting;

// <button onClick={props.logout}>Logout</button>
