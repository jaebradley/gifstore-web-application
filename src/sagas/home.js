import {
  call,
} from 'redux-saga/effects';

function* home() {
  // TODO: @jaebradley add stuff to home saga
  // eslint-disable-next-line no-console
  yield call(console.log, 'Home Saga Called');
}

export default home;
