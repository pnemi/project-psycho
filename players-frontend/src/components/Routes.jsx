import React from 'react'
import { Switch, Route } from 'react-router-dom'

import RolesList from '@components/RolesList'
import Rules from '@components/Rules'
import NotFound from '@components/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RolesList} />
    <Route exact path="/rules" component={Rules} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
