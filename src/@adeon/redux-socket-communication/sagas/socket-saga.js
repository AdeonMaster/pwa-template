import { put, take, fork, cancel, apply } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { forEachObjIndexed } from 'ramda';
import openSocket from 'socket.io-client';

import {
  SOCKET_EVENT,
  EXCLUDED_SOCKET_ACTIONS,
  DEFAULT_SOCKET_CONNECTION_PARAMS,
} from '../constants';
import wildcardActionChannel from '../effects/wildcard-action-channel';

const socketEmitMessagePattern = /socket\/emit\/(.+)/;

const createSocketConnection = (url, params = {}) =>
  openSocket(url, {
    ...DEFAULT_SOCKET_CONNECTION_PARAMS,
    ...params,
  });

const buildReduxAction = (socketEvent, data) => {
  const type = `socket/${socketEvent}`;

  switch (socketEvent) {
    case SOCKET_EVENT.CONNECT_ERROR:
    case SOCKET_EVENT.CONNECT_TIMEOUT:
    case SOCKET_EVENT.RECONNECT_ERROR:
    case SOCKET_EVENT.ERROR:
      return {
        type,
        error: data,
      };

    case SOCKET_EVENT.DISCONNECT:
      return {
        type,
        payload: {
          reason: data,
        },
      };

    case SOCKET_EVENT.RECONNECT:
    case SOCKET_EVENT.RECONNECT_ATTEMPT:
    case SOCKET_EVENT.RECONNECTING:
      return {
        type,
        payload: {
          attemptNumber: data,
        },
      };

    case SOCKET_EVENT.PONG:
      return {
        type,
        payload: {
          latency: data,
        },
      };

    case SOCKET_EVENT.MESSAGE:
      return {
        ...data,
        type: `socket/${socketEvent}/${data.type}`,
      };

    default:
      return { type };
  }
};

const handleSocketEvent = (connectionHandle, emitReduxAction) => (socketEvent) =>
  connectionHandle.on(socketEvent, (data) => {
    emitReduxAction(buildReduxAction(socketEvent, data));
  });

const createSocketListenChannel = (connectionHandle) =>
  eventChannel((emitReduxAction) => {
    forEachObjIndexed(handleSocketEvent(connectionHandle, emitReduxAction), SOCKET_EVENT);

    // unsubscribe function
    return () => undefined;
  });

function* listenSocketEventSaga(connectionHandle) {
  const socketListenChannel = createSocketListenChannel(connectionHandle);

  while (true) {
    const action = yield take(socketListenChannel);

    if (!EXCLUDED_SOCKET_ACTIONS.includes(action.type)) {
      yield put(action);
    }
  }
}

function* writeSocketEventSaga(connectionHandle) {
  const socketWriteChannel = yield wildcardActionChannel(socketEmitMessagePattern);

  while (true) {
    const { type, ...otherProps } = yield take(socketWriteChannel);

    const [, messageName] = socketEmitMessagePattern.exec(type);

    yield apply(connectionHandle, connectionHandle.emit, [
      SOCKET_EVENT.MESSAGE,
      {
        type: messageName,
        ...otherProps,
      },
    ]);
  }
}

export default function* reduxSocketCommunicationRootSaga() {
  while (true) {
    const {
      payload: { url, params },
    } = yield take('socket/attach-connection');
    const connectionHandle = createSocketConnection(url, params);

    const listenTask = yield fork(listenSocketEventSaga, connectionHandle);
    const writeTask = yield fork(writeSocketEventSaga, connectionHandle);

    yield take('socket/detach-connection');
    yield cancel(listenTask);
    yield cancel(writeTask);
  }
}
