## Redux based socket communication mechanism
To connect to a socket, client should dispatch an Redux action with type **socket/attach-connection**. List of available parameters [here](https://socket.io/docs/client-api/#new-Manager-url-options). Example:
```javascript
dispatch({
  type: 'socket/attach-connection',
  payload: {
    url: 'https://path-to-your-socket.com',
    params: {
      reconnectionAttempts: 5,
    },
  }
});
```

To close a socket connection, client should dispatch an Redux action with type **socket/detach-connection**. Example:
```javascript
dispatch({
  type: 'socket/detach-connection',
});
```

To send a socket message, client should dispatch an Redux action with type like **'socket/emit/*'** where **\*** wildcard is a message name. Example:
```javascript
dispatch({
  type: 'socket/emit/ExampleMessageName',
  payload: {
    message: 'Hello world!'
  }
});
```

When a server is sending a socket message it will be dispatched as an Redux action with type like **'socket/message/*'** where **\*** wildcard is a message name. Note: To stop listen for a specific messages it's type should be included in **EXCLUDED_SOCKET_ACTIONS** array inside constants file.
