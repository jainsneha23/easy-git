import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './components/App';
import HomePage from './components/HomePage';
import AddRepo from './components/AddRepo';

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.ADDREPO} component={AddRepo} />
    </Switch>
  </App>
);
