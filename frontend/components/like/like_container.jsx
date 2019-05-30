import { connect } from 'react-redux';

import Likes from './like';

const mSP = (state, ownProps) => {
  console.log(state, ownProps);
  return {
    post: ownProps.post,
  };
};

const mDP = dispatch => {
  return {


  };
};

export default connect(mSP, mDP)(Likes);