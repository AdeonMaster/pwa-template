import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from 'reactstrap';

import Page from '~/pages/common/components/page';
import useDictionary from '~/@adeon/localization/hooks/use-dictionary';
import {
  socketAttachConnection,
  socketDetachConnection,
  socketEmitMesage,
} from '~/@adeon/redux-socket-communication/actions/socket-actions';

const DEFAULT_SOCKET_URL = 'https://localhost:8080';

const urlInputStyle = {
  maxWidth: '300px',
};

const defaultMessage = `{
  "age": 24,
  "sex": "male"
}`;

const SocketExample = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(DEFAULT_SOCKET_URL);
  const [payload, setPayload] = useState(defaultMessage);
  const handleUrlChange = useCallback((event) => setUrl(event.target.value), [setUrl]);
  const handleSocketConnect = useCallback(() => dispatch(socketAttachConnection(url)), [
    url,
    dispatch,
  ]);
  const handleSocketDisconnect = useCallback(() => dispatch(socketDetachConnection()), [dispatch]);
  const handleSocketEmit = useCallback(
    () => dispatch(socketEmitMesage('TestSocketMessage', JSON.parse(payload))),
    [dispatch, payload],
  );
  const handlePayloadChange = useCallback(({ target: { value } }) => setPayload(value), [
    setPayload,
  ]);

  const dictionary = useDictionary();

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
            <Button className="mr-2 mb-2" color="primary" onClick={handleSocketConnect}>
              Connect
            </Button>
            <Button className="mr-2 mb-2" color="primary" onClick={handleSocketDisconnect}>
              Disconnect
            </Button>
            <Button className="mr-2 mb-2" color="primary" onClick={handleSocketEmit}>
              Emit
            </Button>
          </div>

          <Input type="textarea" value={payload} onChange={handlePayloadChange} />
        </div>
      </div>
    </Page>
  );
};

export default SocketExample;
