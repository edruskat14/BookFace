import { RECEIVE_NEWS } from '../actions/news_actions';

const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NEWS:
      return action.newsApi;
    default:
      return state;
  };
};

export default newsReducer;
