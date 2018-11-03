import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { HashRouter } from 'react-router-dom'

import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <HashRouter basename={process.env.ROUTER_BASENAME}>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
, document.getElementById('app'))
