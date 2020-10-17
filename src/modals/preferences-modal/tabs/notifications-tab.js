import React from 'react';
// import React, { useCallback } from 'react';
import { CustomInput } from 'reactstrap';
// import { useDispatch } from 'react-redux';

import useDictionary from '~/@adeon/localization/hooks/use-dictionary';

const NotificationsTab = () => {
  const dictionary = useDictionary();
  // const dispatch = useDispatch();

  // const handleNotificationsChange = useCallback(
  //   ({ target: { checked } }) => {
  //     dispatch(toggleDarkMode(checked));
  //     switchTheme(checked ? 'dark-theme' : 'light-theme');
  //   },
  //   [dispatch],
  // );

  return (
    <>
      <p className="font-weight-medium">{dictionary.get('notifications')}</p>
      <CustomInput
        type="switch"
        id="notifications"
        name="notifications"
        label="Enable notifications"
        // defaultChecked={isDarkMode}
        // onChange={handleNotificationsChange}
      />
    </>
  );
};

export default NotificationsTab;
