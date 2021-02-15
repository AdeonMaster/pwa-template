import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';

import store from './store';
import App from './app';
// import { SENTRY_DNS, APP_ID } from './common/constants';
import ErrorBoundary from './common/components/error-boundary';
// import { isLocalhost } from './common/utils';
// import { getLang } from './common/selectors/app-selectors';
import './common/scss/main.scss';

// if (!isLocalhost()) {
// Sentry.init({
//   environment: process.env.NODE_ENV,
//   dsn: SENTRY_DNS,
//   integrations: [new Integrations.BrowserTracing()],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });

// Sentry.setContext('Additional Details', {
//   app: APP_ID,
//   version: process.env.PACKAGE_VERSION,
//   lang: getLang(store),
// });
// }

// call specific redux action on service worker updatefound event
if (window?.navigator?.serviceWorker?.getRegistrations) {
  window.navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => {
      const [registration] = registrations;

      if (registration) {
        registration.addEventListener('updatefound', (event) => {
          if (event.currentTarget.active) {
            store.dispatch({
              type: 'sw/updated',
            });
          }
        });
      }
    })
    .catch((getRegistrationsError) => {
      // eslint-disable-next-line no-console
      console.log('SW getRegistrations failed: ', getRegistrationsError);
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
