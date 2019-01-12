import {
  all,
  fork,
} from 'redux-saga/effects';
import {
  router,
} from 'redux-saga-router';

import history from '../history';
import routes from './routes';
import {
  watchSuccessfulLogin,
  watchFailedLogin,
} from './watchers';

export default function* rootSaga() {
  yield all([
    fork(watchSuccessfulLogin),
    fork(watchFailedLogin),
    fork(router, history, routes),
  ]);
}
