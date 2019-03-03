import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './components/App';
import HomePage from './components/HomePage';
import AddRepo from './components/AddRepo';
import BranchDetail from './components/branch-detail/';

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.HOME} component={BranchDetail} />
      <Route path={routes.ADDREPO} component={AddRepo} />
      <Route path={routes.BRANCH_DETAIL} component={BranchDetail} />
    </Switch>
  </App>
);
