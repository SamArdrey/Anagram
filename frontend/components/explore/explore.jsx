import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.loggedIn) {
      return <SessionFormContainer />
    }

    return (
      <div>Penis</div>
    )
  }
}


export default Explore;