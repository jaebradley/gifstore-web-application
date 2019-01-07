function* handleFailedLogin({ payload: data }) {
  yield console.log(data);
}

export default handleFailedLogin;
