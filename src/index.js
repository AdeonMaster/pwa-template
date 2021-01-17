import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';

import store from './store';
import App from './app';
// import { SENTRY_DNS } from './common/constants';
import ErrorBoundary from './common/components/error-boundary';
import './common/scss/main.scss';

// Sentry.init({
//   environment: process.env.NODE_ENV,
//   dsn: SENTRY_DNS,
//   integrations: [new Integrations.BrowserTracing()],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
