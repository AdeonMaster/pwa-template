import { useSelector, shallowEqual } from 'react-redux';

export default (selector) => useSelector(selector, shallowEqual);
