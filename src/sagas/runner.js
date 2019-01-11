import {
  call,
} from 'redux-saga/effects';

import history from '../history';

export default function* runner(fn) {
  try {
    yield call(fn);
  } catch (e) {
    if (e instanceof HTTPError) {
      history.push('/login');
    }
  }
}
