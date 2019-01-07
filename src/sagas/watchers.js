import {
  takeLatest,
} from 'redux-saga/effects';

import {
  SUCCESSFUL,
  FAILED,
} from 'Actions/login/types';

import handleSuccessfulLogin from './handleSuccessfulLogin';
import handleFailedLogin from './handleFailedLogin';

function* watchSuccessfulLogin() {
  yield takeLatest(SUCCESSFUL, handleSuccessfulLogin);
}

function* watchFailedLogin() {
  yield takeLatest(FAILED, handleFailedLogin);
}

export {
  watchSuccessfulLogin,
  watchFailedLogin,
};
