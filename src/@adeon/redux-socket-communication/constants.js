export const SOCKET_EVENT = {
  CONNECT: 'connect', // Fired upon a connection including a successful reconnection.
  CONNECT_ERROR: 'connect_error', // Fired upon a connection error.
  CONNECT_TIMEOUT: 'connect_timeout', // Fired upon a connection timeout.
  ERROR: 'error', // Fired when an error occurs.
  DISCONNECT: 'disconnect', // Fired upon a disconnection.
  RECONNECT: 'reconnect', // Fired upon a successful reconnection.
  RECONNECT_ATTEMPT: 'reconnect_attempt', // Fired upon an attempt to reconnect.
  RECONNECTING: 'reconnecting', // Fired upon an attempt to reconnect.
  RECONNECT_ERROR: 'reconnect_error', // Fired upon a reconnection attempt error.
  RECONNECT_FAILED: 'reconnect_failed', // Fired when couldn’t reconnect within reconnectionAttempts
  PING: 'ping', // Fired when a ping packet is written out to the server.
  PONG: 'pong', // Fired when a pong is received from the server.
  // custom
  MESSAGE: 'message',
};

export const EXCLUDED_SOCKET_ACTIONS = ['socket/ping', 'socket/pong'];

export const DEFAULT_SOCKET_CONNECTION_PARAMS = {
  reconnectionAttempts: 3,
};
