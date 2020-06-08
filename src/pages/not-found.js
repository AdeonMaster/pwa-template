import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '~/common/components/localization';

const wrapperStyle = {
  minHeight: '100vh',
};

const NotFound = () => {
  const dictionary = useLocalization();

  return (
    <div className="bg-dark h-100 p-3 text-light" style={wrapperStyle}>
      <h5 className="text-center mb-4">{dictionary.get('something-went-wrong')}</h5>
      <h5 className="text-center mb-5">
        <Link to="/">{dictionary.get('back')}</Link>
      </h5>
    </div>
  );
};

export default NotFound;
