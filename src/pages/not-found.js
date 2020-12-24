import { Link } from 'react-router-dom';

import useDictionary from '~/common/hooks/localization/use-dictionary';
import Page from '~/pages/common/components/page';

const NotFound = () => {
  const dictionary = useDictionary();

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
