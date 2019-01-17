function* handleFailedLogin({ payload: data }) {
  // eslint-disable-next-line no-console
  yield console.log(data);
}

export default handleFailedLogin;
