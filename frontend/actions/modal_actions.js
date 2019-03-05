export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, image, imageId) => {
  return {
    type: OPEN_MODAL,
    modal,
    image,
    imageId
  };
};
export const openOpenModal = (modal, image, imageId) => dispatch => (
  dispatch(openModal(modal, image, imageId)).then(() => history.pushState('fsd'))
)

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};