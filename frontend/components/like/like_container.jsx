import { connect } from 'react-redux';

import Likes from './like';
import { fetchAllLikes, createLike, deleteLike } from '../../actions/like_actions';

const mSP = (state, ownProps) => {
  return {
    likes: state.entities.likes,
    post: ownProps.post,
  };
};

const mDP = dispatch => {
  return {
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like)),
    fetchAllLikes: () => dispatch(fetchAllLikes()),
  };
};

export default connect(mSP, mDP)(Likes);