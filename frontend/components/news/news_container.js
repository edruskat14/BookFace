import { connect } from 'react-redux';
import News from './news';
import { fetchNews } from '../actions/news_actions';


const msp = (state) => {
  return {
    news: state.entities.news
  }
}

export default connect(msp)(News);
