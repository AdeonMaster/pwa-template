import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

import { LocalizationProvider, buildDictionaries } from '~/common/components/localization';
import SplashScreen from '~/common/components/splash-screen';
import ErrorBoundary from '~/common/components/error-boundary';
import ScrollContext from '~/common/components/scroll-context';
import LocationListener from '~/common/components/location-listener';

import SideMenu from '~/pages/components/side-menu';
import Home from '~/pages/home';
import SocketExample from '~/pages/socket-example';
import ModalExample from '~/pages/modal-example';
import NotFound from '~/pages/not-found';

import { LANG } from '~/common/constants';
import { getLang, getIsLoading } from '~/common/selectors/app-selectors';
import { init } from '~/common/actions/app-actions';

import enDictionaryContent from '~/locale/en.locale';
import deDictionaryContent from '~/locale/de.locale';
import frDictionaryContent from '~/locale/fr.locale';
import ruDictionaryContent from '~/locale/ru.locale';
import useShallowEqualSelector from './common/hooks/use-shallow-equal-selector';

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

const dictionaries = buildDictionaries({
  [LANG.EN]: enDictionaryContent,
  [LANG.DE]: deDictionaryContent,
  [LANG.FR]: frDictionaryContent,
  [LANG.RU]: ruDictionaryContent,
});

const App = () => {
  const dispatch = useDispatch();
  const lang = useShallowEqualSelector(getLang);
  const isLoading = useShallowEqualSelector(getIsLoading);

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <LocalizationProvider lang={lang} dictionaries={dictionaries}>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <BrowserRouter>
            <LocationListener>
              <SideMenu />
              <ScrollContext>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/socket-example" component={SocketExample} />
                  <Route exact path="/modal-example" component={ModalExample} />
                  <Route component={NotFound} />
                </Switch>
              </ScrollContext>
            </LocationListener>
          </BrowserRouter>
        )}
      </LocalizationProvider>
    </ErrorBoundary>
  );
};

export default App;
