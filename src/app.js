import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';

import SplashScreen from '~/common/components/splash-screen';
import ScrollContext from '~/common/components/scroll-context';
import LocationListener from '~/common/components/location-listener';

import SideMenu from '~/pages/common/components/side-menu';
import Home from '~/pages/home';
import SocketExample from '~/pages/socket-example';
import ModalExample from '~/pages/modal-example';
import FormExample from '~/pages/form-example';
import PushNotificationExample from '~/pages/push-notification-example';
import NotFound from '~/pages/not-found';
import PreferencesModal from '~/modals/preferences-modal';
import NewVersionModal from '~/modals/new-version-modal';

import { getIsLoading } from '~/common/selectors/app-selectors';
import { init } from '~/common/actions/app-actions';

import useShallowEqualSelector from './common/hooks/use-shallow-equal-selector';

// Tell Font Awesome to skip adding the CSS automatically since it's being imported inside styles
config.autoAddCss = false;

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useShallowEqualSelector(getIsLoading);

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return isLoading ? (
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
            <Route exact path="/form-example" component={FormExample} />
            <Route exact path="/push-notification-example" component={PushNotificationExample} />
            <Route component={NotFound} />
          </Switch>
        </ScrollContext>

        <PreferencesModal />
        <NewVersionModal />
      </LocationListener>
    </BrowserRouter>
  );
};

export default App;
