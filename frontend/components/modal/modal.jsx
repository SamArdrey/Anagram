import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ShowPostContainer from '../post/show_post_container';
import CreatePostContainer from '../post/create_post_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'show':
      component = <ShowPostContainer />;
      break;
    case 'create':
      component = <CreatePostConatiner />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  let modalState = !!state.ui.modal
  return {
    modal: ( modalState ?
      state.ui.modal.currentState :
      null )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);