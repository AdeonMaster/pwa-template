import Page from '~/pages/common/components/page';
import useDictionary from '~/common/hooks/localization/use-dictionary';

const reactIconStyle = {
  maxWidth: '300px',
  width: '100%',
};

const Home = () => {
  const dictionary = useDictionary();

  return (
    <Page title={dictionary.get('page.home')}>
      <div className="container">
        <div className="text-center mb-4 overflow-hidden">
          <img
            className="spin user-select-none"
            src="/img/react-icon.svg"
            alt="React icon"
            style={reactIconStyle}
          />
        </div>
        <h5 className="text-center text-truncate mb-4">{dictionary.get('edit')}</h5>
        <h5 className="text-center text-truncate mb-5">
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            {dictionary.get('learn')}
          </a>
        </h5>
      </div>
    </Page>
  );
};

export default Home;
