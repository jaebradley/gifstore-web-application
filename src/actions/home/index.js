import {
  OPEN_ADD_IMAGE_DIALOG,
  CLOSE_ADD_IMAGE_DIALOG,
} from './types';

function openAddImageDialog() {
  return {
    type: OPEN_ADD_IMAGE_DIALOG,
  };
}

function closeAddImageDialog() {
  return {
    type: CLOSE_ADD_IMAGE_DIALOG,
  };
}

export {
  openAddImageDialog,
  closeAddImageDialog,
};
