import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';

import Home from '~/pages/Home';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <ScrollContext>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </ScrollContext>
    </BrowserRouter>
  </div>
);

export default App;
