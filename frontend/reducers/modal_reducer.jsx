import { OPEN_POST_MODAL, OPEN_CREATE_POST_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import merge from 'lodash/merge';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_POST_MODAL:
      return merge({}, state, {currentState: action.modal, image: action.image, imageId: action.imageId});
    case OPEN_CREATE_POST_MODAL:
      return merge({}, state, {currentState: action.modal});
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}