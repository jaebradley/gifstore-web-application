import {
  call,
} from 'redux-saga/effects';

import makeHTTPRequest from './makeHTTPRequest';

function* google(accessToken) {
  yield call(makeHTTPRequest, { path: '/api/google/authentication', method: 'POST', body: { token: accessToken } });
}

export {
  google,
};
