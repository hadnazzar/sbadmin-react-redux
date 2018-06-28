import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './containers/Dashboard'
import Charts from './containers/Charts'
import DataTablePage from './containers/DataTablePage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/charts' component={Charts} />
    <Route path='/datatable' component={DataTablePage} />
  </Switch>
);

export default Routes;
