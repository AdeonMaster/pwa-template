import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './app';
import './common/scss/main.scss';

// call specific redux action on service worker updatefound event
if (window?.navigator?.serviceWorker?.getRegistrations) {
  window.navigator.serviceWorker.getRegistrations().then((registrations) => {
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
  });
}

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
