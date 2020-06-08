import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';

import useShallowEqualSelector from '~/common/hooks/use-shallow-equal-selector';
import { useLocalization } from '~/common/components/localization';
import { getLang } from '~/common/selectors/app-selectors';
import { LANG } from '~/common/constants';
import { setLang } from '~/common/actions/app-actions';

const wrapperStyle = {
  minHeight: '100vh',
};
const reactIconStyle = {
  maxWidth: '300px',
};

const Home = () => {
  const dispatch = useDispatch();
  const lang = useShallowEqualSelector(getLang);
  const dictionary = useLocalization();
  const handleLangChange = useCallback((newLang) => () => dispatch(setLang(newLang)), [dispatch]);

  return (
    <div className="bg-dark h-100 p-3 text-light" style={wrapperStyle}>
      <div className="text-center mb-4">
        <img
          className="w-100 spin"
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
  );
};

export default Home;
