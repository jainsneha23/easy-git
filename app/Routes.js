import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './components/App';
import HomePage from './components/HomePage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
