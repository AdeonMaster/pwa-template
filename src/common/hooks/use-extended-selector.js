import { useSelector } from 'react-redux';

const useExtendedSelector = (selector, ownProps = {}, equalityFn) =>
  useSelector((state) => selector(state, ownProps), equalityFn);

export default useExtendedSelector;
