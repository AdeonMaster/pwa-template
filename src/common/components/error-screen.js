import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDizzy } from '@fortawesome/free-regular-svg-icons';

const ErrorScreen = () => (
  <div className="bg-danger vw-100 vh-100 d-flex justify-content-center align-items-center">
    <FontAwesomeIcon icon={faDizzy} className="text-white font-size-256 w-100" />
  </div>
);

export default ErrorScreen;
