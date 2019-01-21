function isAddImageDialogOpen(state) {
  return state.getIn(['home', 'addImageDialog', 'isOpen']);
}

function isAddImageDialogImageValid(state) {
  return state.getIn(['home', 'addImageDialog', 'isValidImage']);
}

function getAddImageDialogURL(state) {
  return state.getIn(['home', 'addImageDialog', 'value']);
}

export {
  isAddImageDialogOpen,
  isAddImageDialogImageValid,
  getAddImageDialogURL,
};
