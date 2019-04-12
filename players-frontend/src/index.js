import * as appActions from '@store/app/appActions'

import App from '@components/App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/config'

const store = configureStore()
store.dispatch(appActions.appInitBegin())

ReactDOM.render(
  <HashRouter basename={process.env.ROUTER_BASENAME}>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('app')
)
