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
  watchLogout,
} from './watchers';

export default function* rootSaga() {
  yield all([
    fork(watchSuccessfulLogin),
    fork(watchFailedLogin),
    fork(watchLogout),
    fork(router, history, routes),
  ]);
}
