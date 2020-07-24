import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Admin from '../pages/Painel/dashboard';
import CreateTrips from '../pages/Painel/CreateTrips';
import TripDetail from '../pages/Painel/TripDetail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/admin/" exact component={Admin} />
      <Route path="/admin/cadastrar-viagem" component={CreateTrips} />
      <Route path="/admin/detalhes-da-viagem/:id">
        <TripDetail />
      </Route>
    </Switch>
  );
}
