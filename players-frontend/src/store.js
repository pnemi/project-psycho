import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import rootEpic from './epics'

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware()

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(rootEpic)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
