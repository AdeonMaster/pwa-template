import { EMPTY_OBJECT } from '~/common/constants';

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

export const socketEmitMessage = (messageName, payload = EMPTY_OBJECT) => ({
  type: `socket/emit/${messageName}`,
  payload,
});
