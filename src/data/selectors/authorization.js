function getToken(store) {
  return store.get('authToken');
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getToken,
};
