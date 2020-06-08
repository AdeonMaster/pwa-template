import { useEffect } from 'react';
import { useHistory } from 'react-router';

const useOnLocationChange = (handleLocationChange) => {
  const history = useHistory();

  useEffect(() => {
    const listener = history.listen(handleLocationChange);

    return () => {
      if (listener) {
        listener.unlisten();
      }
    };
  }, [history, handleLocationChange]);
};

export default useOnLocationChange;
