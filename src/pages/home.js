import React from 'react';

import Page from '~/pages/common/components/page';
import useDictionary from '~/@adeon/localization/hooks/use-dictionary';

const reactIconStyle = {
  maxWidth: '300px',
};

const Home = () => {
  const dictionary = useDictionary();

  return (
    <Page title={dictionary.get('page.home')}>
      <div className="container">
        <div className="text-center mb-4">
          <img
            className="w-100 spin user-select-none"
            src="/img/react-icon.svg"
            alt="React icon"
            style={reactIconStyle}
          />
        </div>
        <h5 className="text-center mb-4">{dictionary.get('edit')}</h5>
        <h5 className="text-center mb-5">
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            {dictionary.get('learn')}
          </a>
        </h5>
      </div>
    </Page>
  );
};

export default Home;
