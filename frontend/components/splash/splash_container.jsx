import {logout} from '../../actions/session_actions';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    // posts: state.entities.users[state.session.id].posts
  };
};

const mapDispatchToProps = dispatch => {
    return {
      logoutUser: () => dispatch(logout()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
