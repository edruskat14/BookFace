import * as NewsApiUtil from '../util/news_api_util';

export const RECEIVE_NEWS = 'RECEIVE_NEWS';

export const fetchNews = () => {
  return dispatch => {
    return NewsApiUtil.fetchNews().then((newsApi) => {
      return dispatch({ type: RECEIVE_NEWS, newsApi })
    });
  };
};
