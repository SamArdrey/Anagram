import { fetchPosts } from '../../actions/post_actions';
import Posts from './posts';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    userPosts: state.entities.posts,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = (dispatch, state) => {
    return {
      fetchPosts: id => dispatch(fetchPosts(id)),
      openModal: (modal, imageLocation, imageId) => dispatch(openModal(modal, imageLocation, imageId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);