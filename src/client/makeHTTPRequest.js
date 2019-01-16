import axios from 'axios';

async function makeHTTPRequest({
  path,
  method = 'GET',
  queryParameters = {},
  body = {},
  headers = {},
}) {
  const instance = axios.create({
    baseURL: process.env.SERVER_BASE_URL,
  });
  const response = await instance.request({
    url: path,
    method,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('authToken')}`,
      ...headers,
    },
    params: queryParameters,
    data: body,
  });
  return response;
}

export default makeHTTPRequest;
