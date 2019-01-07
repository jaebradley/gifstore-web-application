import {
  all,
  fork,
} from 'redux-saga/effects';

import {
  watchSuccessfulLogin,
  watchFailedLogin,
} from './watchers';

export default function* rootSaga() {
  yield all([
    fork(watchSuccessfulLogin),
    fork(watchFailedLogin),
  ]);
}
