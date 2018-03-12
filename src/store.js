import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { sortMiddleware, filterMiddleware, productMiddleware } from './middleware'
import { rootReducer } from './reducers'

const middleware = [
  filterMiddleware,
  sortMiddleware,
  productMiddleware,
  thunk
]

const configureStore = (initialState = {}) => {
  const store = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}

export default configureStore
