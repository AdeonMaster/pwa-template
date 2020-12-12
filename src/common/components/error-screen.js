import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDizzy } from '@fortawesome/free-regular-svg-icons';

import AppCrashModal from '~/modals/app-crash-modal';

const ErrorScreen = () => (
  <>
    <div className="bg-danger vw-100 vh-100 d-flex flex-column justify-content-center align-items-center text-white">
      <FontAwesomeIcon icon={faDizzy} className="font-size-256 w-100" />
    </div>

    <AppCrashModal />
  </>
);

export default ErrorScreen;
