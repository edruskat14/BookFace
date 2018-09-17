import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';

const msp = (state, ownProps) {
  return {
    comments: ownProps.posts.comments
  }
}

export default connect(msp)(PostIndexItem);
