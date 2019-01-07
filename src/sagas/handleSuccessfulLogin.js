import axios from 'axios';
import {
  call,
  put,
} from 'redux-saga/effects';

import {
  setAuthToken,
} from 'Actions/authentication';

function* handleSuccessfulLogin({ payload: data }) {
  const accessToken = data.data.tokenObj.access_token;
  const response = yield call(axios.post, `${process.env.SERVER_BASE_URL}/api/google/authentication`, { token: accessToken });
  const authToken = response.headers['x-gifstore-auth-token'];
  yield put(setAuthToken(authToken));
}

export default handleSuccessfulLogin;
