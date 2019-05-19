import { Route, Switch } from 'react-router-dom'

import Home from '@psycho/pages/Home'
import NotFound from '@psycho/components/NotFound'
import React from 'react'
import Rules from '@psycho/components/Rules'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rules" component={Rules} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
