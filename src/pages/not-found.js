import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '~/common/components/localization';

import Page from './components/page';

const NotFound = () => {
  const dictionary = useLocalization();

  return (
    <Page title={dictionary.get('page.not-found')}>
      <div className="container">
        <h5 className="text-center mb-4">{dictionary.get('something-went-wrong')}</h5>
        <h5 className="text-center mb-5">
          <Link to="/">{dictionary.get('back')}</Link>
        </h5>
      </div>
    </Page>
  );
};

export default NotFound;
