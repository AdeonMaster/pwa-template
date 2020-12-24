import { call, delay } from 'redux-saga/effects';

/**
 * Used to fill remaining timeframe after saga call with a delay
 *
 * @param {number} ms - A string param
 * @param {GeneratorFunction} saga - generator function (saga)
 * @param {...*} params - saga params
 * @return {string} A good string
 *
 * @example
 * yield call(callWithTimeframeDelay, 2000, exampleSaga, 'test');
 */
export function* callWithTimeframeDelay(ms, saga, ...params) {
  const sagaStartTime = Date.now();

  const result = yield call(saga, ...params);

  const sagaRemainingTime = ms - (Date.now() - sagaStartTime);

  if (sagaRemainingTime) {
    yield delay(sagaRemainingTime);
  }

  return result;
}
