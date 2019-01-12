import {
  call,
} from 'redux-saga/effects';

export default function* runner(fn) {
  try {
    yield call(fn);
  } catch (e) {
    console.error('error is', e);
  }
}
