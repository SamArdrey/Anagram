import fetchPosts from '../../actions/post_actions';
import Posts from './posts';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  let pPlural = (!!state ? state.posts : "")

  return {
    userPosts: state.entities.posts
  };
};

const mapDispatchToProps = (dispatch, state) => {
    return {
      // posts: id => dispatch(fetchPosts(id)),
      openModal: (modal, imageLocation) => dispatch(openModal(modal, imageLocation))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);