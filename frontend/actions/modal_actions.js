export const OPEN_POST_MODAL = 'OPEN_POST_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_CREATE_POST_MODAL = 'OPEN_CREATE_POST_MODAL';

export const openPostModal = (modal, image, imageId) => {
  return {
    type: OPEN_POST_MODAL,
    modal,
    image,
    imageId
  };
};

export const openCreatePostModal = (modal) => {
  return {
    type: OPEN_CREATE_POST_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};