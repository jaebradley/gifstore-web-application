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
  yield put(setAuthToken(authToken));
  window.localStorage.setItem('authToken', authToken);
  history.push('/');
}

export default handleSuccessfulLogin;
