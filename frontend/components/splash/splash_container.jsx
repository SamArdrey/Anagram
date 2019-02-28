
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id]
  };
};


export default connect(mapStateToProps, null)(Splash)
