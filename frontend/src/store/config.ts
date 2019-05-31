import { applyMiddleware, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from '@psycho/epics'
import rootReducer from './index'

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware<any, any, any, any>()

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(rootEpic)

  if (module.hot) {
    module.hot.accept('./index', () => {
      const nextRootReducer = require('./index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
