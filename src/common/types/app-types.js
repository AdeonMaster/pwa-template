import buildKeyMirrorEnum from '~/common/utils/build-key-mirror-enum';

const suffixes = ['SUCCESS', 'FAILURE'];

export default buildKeyMirrorEnum('APP', [
  ['INIT', suffixes],
  ['SET_LANG', suffixes],
  'LOCATION_CHANGE',
  'TOGGLE_MENU',
  'TOGGLE_DARK_MODE',
  'CRASH_ERROR',
]);
