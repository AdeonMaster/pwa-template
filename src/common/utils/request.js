import axios from 'axios';
import { pathOr } from 'ramda';

export const wrapPromiseWithErrorHandler = (promise) =>
  promise
    .then((response) => [response, null])
    .catch((error) => [
      null,
      new Error(pathOr(error.message, ['response', 'data', 'error'], error)),
    ]);

export default (axiosProps) => wrapPromiseWithErrorHandler(axios(axiosProps));
