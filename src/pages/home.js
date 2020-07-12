import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';

import Page from './components/page';
import { useLocalization } from '~/common/components/localization';
import { getLang } from '~/common/selectors/app-selectors';
import { LANG } from '~/common/constants';
import { setLang } from '~/common/actions/app-actions';

const reactIconStyle = {
  maxWidth: '300px',
};

const Home = () => {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  const dictionary = useLocalization();
  const handleLangChange = useCallback((newLang) => () => dispatch(setLang(newLang)), [dispatch]);

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

        <div className="d-flex justify-content-center">
          <ButtonGroup size="sm">
            <Button
              color="light"
              outline
              active={lang === LANG.EN}
              onClick={handleLangChange(LANG.EN)}
            >
              EN
            </Button>
            <Button
              color="light"
              outline
              active={lang === LANG.DE}
              onClick={handleLangChange(LANG.DE)}
            >
              DE
            </Button>
            <Button
              color="light"
              outline
              active={lang === LANG.FR}
              onClick={handleLangChange(LANG.FR)}
            >
              FR
            </Button>
            <Button
              color="light"
              outline
              active={lang === LANG.RU}
              onClick={handleLangChange(LANG.RU)}
            >
              RU
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Page>
  );
};

export default Home;
