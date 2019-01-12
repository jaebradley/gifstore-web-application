import {
  call,
} from 'redux-saga/effects';

import makeHTTPRequest from './makeHTTPRequest';

function* google(accessToken) {
  const response = yield call(makeHTTPRequest, { path: '/api/google/authentication', method: 'POST', body: { token: accessToken } });
  return response;
}

export {
  google,
};
