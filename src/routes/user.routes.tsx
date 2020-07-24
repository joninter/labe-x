import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Site/Home';
import Login from '../pages/Site/Login';
import Register from '../pages/Site/Register';
import ListTrips from '../pages/Site/ListTrips';
import ApplyToTrip from '../pages/Site/ApplyToTrip';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Register} />
      <Route path="/viagens" component={ListTrips} />
      <Route path="/candidatar-se" component={ApplyToTrip} />
    </Switch>
  );
}
