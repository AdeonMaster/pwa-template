import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

import Page from './components/page';
import { useLocalization } from '~/common/components/localization';
import {
  socketAttachConnection,
  socketDetachConnection,
  socketEmitMesage,
} from '~/@adeon/redux-socket-communication/actions/socket-actions';

const DEFAULT_SOCKET_URL = 'https://localhost:8080';

const urlInputStyle = {
  maxWidth: '300px',
};

const SocketExample = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(DEFAULT_SOCKET_URL);
  const handleUrlChange = useCallback((event) => setUrl(event.target.value), [setUrl]);
  const handleSocketConnect = useCallback(() => dispatch(socketAttachConnection(url)), [
    url,
    dispatch,
  ]);
  const handleSocketDisconnect = useCallback(() => dispatch(socketDetachConnection()), [dispatch]);
  const handleSocketEmit = useCallback(
    () =>
      dispatch(
        socketEmitMesage('TestSocketMessage', {
          age: 24,
          sex: 'male',
        }),
      ),
    [dispatch],
  );
  const dictionary = useLocalization();

  return (
    <Page title={dictionary.get('page.socket-example')}>
      <div className="container">
        <h5 className="text-center mb-4">Socket example</h5>

        <div className="d-flex flex-wrap justify-content-center">
          <input
            type="text"
            className="form-control mr-2 mb-2"
            style={urlInputStyle}
            value={url}
            onChange={handleUrlChange}
          />

          <div>
            <Button className="mr-2 mb-2" color="light" outline onClick={handleSocketConnect}>
              Connect
            </Button>
            <Button className="mr-2 mb-2" color="light" outline onClick={handleSocketDisconnect}>
              Disconnect
            </Button>
            <Button className="mr-2 mb-2" color="light" outline onClick={handleSocketEmit}>
              Emit
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default SocketExample;
