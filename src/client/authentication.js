import {
  call,
} from 'redux-saga/effects';

import makeHTTPRequest from './makeHTTPRequest';

function* google(accessToken) {
  const response = yield call(makeHTTPRequest, { path: '/api/google/authentication', method: 'POST', body: { token: accessToken } });
  return response;
}

async function refreshCredentials(refreshToken) {
  return makeHTTPRequest({ path: '/api/authentication/refresh-credentials', method: 'POST', body: { token: refreshToken } });
}

export {
  google,
  refreshCredentials,
};
