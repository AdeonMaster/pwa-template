export const socketAttachConnection = (url, params) => ({
  type: 'socket/attach-connection',
  payload: {
    url,
    params,
  },
});

export const socketDetachConnection = () => ({
  type: 'socket/detach-connection',
});

export const socketEmitMesage = (messageName, payload = {}) => ({
  type: `socket/emit/${messageName}`,
  payload,
});
