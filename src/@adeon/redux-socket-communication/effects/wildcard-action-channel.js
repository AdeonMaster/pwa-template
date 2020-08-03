import { actionChannel } from 'redux-saga/effects';

// eslint-disable-next-line func-names
export default function (...args) {
  const [regExpr, ...otherArgs] = args;

  return actionChannel.apply(this, [({ type }) => regExpr.test(type), ...otherArgs]);
}
