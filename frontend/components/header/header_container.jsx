import { connect } from 'react-redux';
import Header from './header';
import { openCreatePostModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
    return {
      openCreatePostModal: modal => dispatch(openCreatePostModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
