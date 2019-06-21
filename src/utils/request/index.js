import axios from 'axios';
import { sleep } from '..';
import { REQUEST } from './constants';

const defaultParams = {
  method: 'GET',
  url: REQUEST.USE_MOCKS ? REQUEST.MOCK_API_URL : REQUEST.API_URL,
  path: '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  data: {},
  sleep: REQUEST.SLEEP
};

const request = requestParams => {
  const params = {
    ...defaultParams,
    ...requestParams
  };
  const {
    method, url, path, headers, data
  } = params;

  return sleep(params.sleep).then(() => axios({
    method,
    url: `${url}${path}`,
    headers,
    data
  })
    .then(response => response.data)
    .catch(error => (Promise.reject(error.response && error.response.data.error && error.response.data.error.message
      ? error.response.data.error.message
      : error.message)
    )));
};

export default request;
