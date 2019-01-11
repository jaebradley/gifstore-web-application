import {
  call,
  put,
} from 'redux-saga/effects';

import {
  google as authenticateWithGoogle,
} from '../client/authentication';
import {
  setAuthToken,
} from 'Actions/authentication';

function* handleSuccessfulLogin({ payload: data }) {
  const accessToken = data.data.tokenObj.access_token;
  const response = yield call(authenticateWithGoogle, accessToken);
  const authToken = response.headers['x-gifstore-auth-token'];
  yield put(setAuthToken(authToken));
  window.localStorage.setItem('authToken', authToken);
  console.log('from local storage', window.localStorage.getItem('authToken'));
}

export default handleSuccessfulLogin;
