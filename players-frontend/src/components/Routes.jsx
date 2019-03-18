import { Route, Switch } from 'react-router-dom'

import Home from '@pages/Home'
import NotFound from '@components/NotFound'
import React from 'react'
import Rules from '@components/Rules'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rules" component={Rules} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
