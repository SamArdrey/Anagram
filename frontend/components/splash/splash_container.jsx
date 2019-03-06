import {logout} from '../../actions/session_actions';
import { connect } from 'react-redux';
import Splash from './splash';
import { openCreatePostModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
    return {
      logoutUser: () => dispatch(logout()),
      openCreatePostModal: (modal) => dispatch(openCreatePostModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
