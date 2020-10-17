import buildKeyMirrorEnum from '~/common/utils/build-key-mirror-enum';

const suffixes = ['SUCCESS', 'FAILURE', 'PENDING'];

export default buildKeyMirrorEnum('FORM', [['SET', suffixes]]);
