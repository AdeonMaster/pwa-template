import buildKeyMirrorEnum from '~/common/utils/build-key-mirror-enum';

const suffixes = ['SUCCESS', 'FAILURE'];

export default buildKeyMirrorEnum('APP', [
  ['INIT', suffixes],
  'SET_LANG',
  'LOCATION_CHANGE',
  'TOGGLE_MENU',
]);
