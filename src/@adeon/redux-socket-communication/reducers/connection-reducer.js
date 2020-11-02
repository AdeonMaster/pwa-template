import { EMPTY_OBJECT } from '~/common/constants';

export const initialState = EMPTY_OBJECT;

const connect = (state, { url }) => ({
  ...state,
  status: 'connected',
  url,
});

const disconnect = (state) => ({
  ...state,
  status: 'disconnected',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'socket/connect':
      return connect(state, action.meta.socket);

    case 'socket/detach-connection':
    case 'socket/disconnect':
      return disconnect(state);

    default:
      return state;
  }
};
