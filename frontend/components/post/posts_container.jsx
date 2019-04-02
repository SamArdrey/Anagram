import { fetchPosts } from '../../actions/post_actions';
import Posts from './posts';
import { connect } from 'react-redux';
import { openPostModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    userPosts: state.entities.posts,
    currentProfileId: ownProps.currentProfileId,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchPosts: userId => dispatch(fetchPosts(userId)),
      openPostModal: (modal, imageLocation, imageId) => dispatch(openPostModal(modal, imageLocation, imageId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);