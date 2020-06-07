import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const SplashScreen = () => (
  <div className="bg-dark vw-100 vh-100 d-flex justify-content-center align-items-center">
    <span className="fade-in">
      <FontAwesomeIcon icon={faCircleNotch} className="text-white font-size-64 w-100 fa-spin" />
    </span>
  </div>
);

export default SplashScreen;
