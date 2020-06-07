import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

import { LocalizationProvider, buildDictionaries } from '~/common/components/localization';
import SplashScreen from '~/common/components/splash-screen';
import ErrorBoundary from '~/common/components/error-boundary';
import ScrollContext from '~/common/components/scroll-context';

import Home from '~/pages/home';

import { LANG } from '~/common/constants';
import { getLang, getIsLoading } from '~/common/selectors/app-selectors';
import { init } from '~/common/actions/app-actions';

import enDictionaryContent from '~/locale/en.locale';
import deDictionaryContent from '~/locale/de.locale';
import frDictionaryContent from '~/locale/fr.locale';
import ruDictionaryContent from '~/locale/ru.locale';

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

const dictionaries = buildDictionaries({
  [LANG.EN]: enDictionaryContent,
  [LANG.DE]: deDictionaryContent,
  [LANG.FR]: frDictionaryContent,
  [LANG.RU]: ruDictionaryContent,
});

const App = ({ lang, isLoading, init }) => {
  useEffect(() => {
    init();
  }, [init]);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <ErrorBoundary>
      <LocalizationProvider lang={lang} dictionaries={dictionaries}>
        <BrowserRouter>
          <ScrollContext>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </ScrollContext>
        </BrowserRouter>
      </LocalizationProvider>
    </ErrorBoundary>
  );
};

App.propTypes = {
  lang: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  lang: getLang,
  isLoading: getIsLoading,
});

const mapDispatchToProps = {
  init,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
