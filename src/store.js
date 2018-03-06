import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'
import productMiddleware from './middlewares/products'

const middleware = [
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
