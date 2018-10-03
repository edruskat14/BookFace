import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
// 
// const configureStore = (state = {}) => {
//   return createStore(rootReducer, state, applyMiddleware(thunk));
// }
const configureStore = (state = {}) => {
  return createStore(rootReducer, state, applyMiddleware(thunk, logger));
}

export default configureStore;
