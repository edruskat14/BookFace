import { combineReducers } from 'redux';
import pendingReducer from './pending_reducer.js';
import approvedReducer from './approved_reducer.js';

const friendshipsReducer = combineReducers({
  pending: pendingReducer,
  approved: approvedReducer
})
export default friendshipsReducer;
