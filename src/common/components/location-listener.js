import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useOnLocationChange from '~/common/hooks/use-on-location-change';
import { locationChange } from '~/common/actions/app-actions';

const LocationListener = ({ children }) => {
  const dispatch = useDispatch();

  const handleLocationChange = useCallback(
    (location) => {
      dispatch(locationChange(location));
    },
    [dispatch],
  );

  useOnLocationChange(handleLocationChange);

  return children;
};

export default LocationListener;
