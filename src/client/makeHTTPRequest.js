import {
  select,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  getToken,
} from '../data/selectors/authorization';

async function* makeHTTPRequest({
  path,
  method = 'GET',
  queryParameters = {},
  body = {},
  headers = {},
}) {
  const instance = axios.create({
    baseURL: process.env.SERVER_BASE_URL,
  });
  const token = yield select(getToken);
  const response = await instance.request({
    url: path,
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    params: queryParameters,
    body,
  });
  return response.data;
}

export default makeHTTPRequest;
