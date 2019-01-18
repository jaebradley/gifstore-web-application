import {
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import {
  LOGOUT,
} from 'Actions/types';
import {
  SUCCESSFUL,
  FAILED,
} from 'Actions/login/types';

import handleSuccessfulLogin from './handleSuccessfulLogin';
import handleFailedLogin from './handleFailedLogin';
import handleLogout from './handleLogout';

function* watchSuccessfulLogin() {
  yield takeLatest(SUCCESSFUL, handleSuccessfulLogin);
}

function* watchFailedLogin() {
  yield takeLatest(FAILED, handleFailedLogin);
}

function* watchLogout() {
  yield takeEvery(LOGOUT, handleLogout);
}

export {
  watchSuccessfulLogin,
  watchFailedLogin,
  watchLogout,
};
