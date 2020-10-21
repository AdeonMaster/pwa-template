import { combineReducers } from 'redux';

import connection from '~/@adeon/redux-socket-communication/reducers/connection-reducer';

import app from '~/common/reducers/app-reducer';
import modal from '~/common/reducers/modal-reducer';
import form from '~/common/reducers/form-reducer';

export default combineReducers({
  app,
  modal,
  form,
  connection,
});
