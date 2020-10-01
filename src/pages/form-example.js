import React from 'react';

import useDictionary from '~/@adeon/localization/hooks/use-dictionary';
import Page from '~/pages/components/page';

const FormExample = () => {
  const dictionary = useDictionary();

  return (
    <Page title={dictionary.get('page.form-example')}>
      <div className="container">
        <h5 className="text-center mb-4">{dictionary.get('page.form-example')}</h5>
      </div>
    </Page>
  );
};

export default FormExample;
