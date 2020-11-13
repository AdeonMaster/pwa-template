import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import OfflinePluginRuntime from 'offline-plugin/runtime';

import store from './store';
import App from './app';
import './common/scss/main.scss';

// service-worker
OfflinePluginRuntime.install({
  onInstalled: () => {
    store.dispatch({
      type: 'sw/installed',
    });
  },
  onUpdating: () => {
    store.dispatch({
      type: 'sw/updating',
    });
  },
  onUpdateReady: () => {
    store.dispatch({
      type: 'sw/update-ready',
    });
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: () => {
    store.dispatch({
      type: 'sw/updated',
    });
    // window.location.reload();
  },
});

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
