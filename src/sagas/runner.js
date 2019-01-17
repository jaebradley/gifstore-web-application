import {
  call,
} from 'redux-saga/effects';

export default function* runner(fn) {
  try {
    yield call(fn);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('error is', e);
  }
}
