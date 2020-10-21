import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, FormText, Row, ButtonGroup, Col, FormGroup } from 'reactstrap';

import Page from '~/pages/common/components/page';
import useDictionary from '~/@adeon/localization/hooks/use-dictionary';
import {
  socketAttachConnection,
  socketDetachConnection,
  socketEmitMesage,
} from '~/@adeon/redux-socket-communication/actions/socket-actions';
import { getConnectionStatus } from '~/@adeon/redux-socket-communication/selectors/connection-selectors';

const DEFAULT_SOCKET_URL = 'https://localhost:8080';

const defaultMessage = `{
  "age": 24,
  "sex": "male"
}`;

const textareaStyle = {
  minHeight: '120px',
};

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
  const connectionStatus = useSelector(getConnectionStatus);

  const disabled = connectionStatus === 'disconnected';

  return (
    <Page title={dictionary.get('page.socket-example')}>
      <div className="container">
        <h5 className="text-center mb-4">{dictionary.get('page.socket-example')}</h5>

        <FormGroup>
          <Row>
            <Col md={8} className="mb-2">
              <Input
                type="text"
                className="mr-2 mb-2 w-100"
                value={url}
                onChange={handleUrlChange}
              />
              <FormText>Socket connection url</FormText>
            </Col>
            <Col md={4}>
              <ButtonGroup className="btn-block">
                <Button
                  className="mb-2"
                  color="primary"
                  onClick={handleSocketConnect}
                  disabled={!disabled}
                >
                  Connect
                </Button>
                <Button
                  className="mb-2"
                  color="danger"
                  onClick={handleSocketDisconnect}
                  disabled={disabled}
                >
                  Disconnect
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Input
            style={textareaStyle}
            type="textarea"
            value={payload}
            onChange={handlePayloadChange}
            disabled={disabled}
          />
          <FormText>Socket message payload</FormText>
        </FormGroup>

        <Button className="mb-2" color="primary" onClick={handleSocketEmit} disabled={disabled}>
          Emit
        </Button>
        <FormText>
          Note: You can monitor socket messages in terminal if connected to local server
        </FormText>
      </div>
    </Page>
  );
};

export default SocketExample;
