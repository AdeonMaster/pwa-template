import { useSelector } from 'react-redux';

import { EMPTY_OBJECT } from '~/common/constants';

const useExtendedSelector = (selector, ownProps = EMPTY_OBJECT, equalityFn) =>
  useSelector((state) => selector(state, ownProps), equalityFn);

export default useExtendedSelector;
