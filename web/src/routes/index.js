import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import Favorites from '~/pages/Favorites';
import Pharmacy from '~/pages/Pharmacy';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/profile" component={Profile} />

      <Route path="/favorites" component={Favorites} />

      <Route path="/search" component={Search} />

      <Route path="/pharmacy/:id" exact component={Pharmacy} />
      <Route
        path="/pharmacy/:id/prod"
        component={() => <p>Not pharmacy exactly</p>}
      />

      <Route path="/" component={() => <div>404</div>} />
    </Switch>
  );
}
