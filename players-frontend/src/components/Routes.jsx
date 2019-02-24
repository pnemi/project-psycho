import { Route, Switch } from 'react-router-dom'

import NotFound from '@components/NotFound'
import React from 'react'
import RolesList from '@components/RolesList'
import Rules from '@components/Rules'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RolesList} />
    <Route exact path="/rules" component={Rules} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
