import {
  call,
  put,
} from 'redux-saga/effects';

import {
  setAuthToken,
} from 'Actions/authentication';
import history from '../history';
import {
  google as authenticateWithGoogle,
} from '../client/authentication';


function* handleSuccessfulLogin({ payload: data }) {
  const accessToken = data.data.tokenObj.access_token;
  const response = yield call(authenticateWithGoogle, accessToken);
  const authToken = response.headers['x-gifstore-auth-token'];
  const refreshToken = response.headers['x-gifstore-refresh-token'];
  yield put(setAuthToken(authToken));
  window.localStorage.setItem('authToken', authToken);
  window.localStorage.setItem('refreshToken', refreshToken);
  history.push('/');
}

export default handleSuccessfulLogin;
