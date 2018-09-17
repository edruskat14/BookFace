import { combineReducers } from 'redux';
import usersGeneralReducer from './users_general_reducer.js';
import friendsReducer from './friends_reducer.js';

const usersReducer = combineReducers({
  friends: friendsReducer,
  general: usersGeneralReducer
})
export default usersReducer;
