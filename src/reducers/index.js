import { combineReducers } from 'redux'

import { default as categories } from './categories'
import { default as priceRange } from './priceRange'
import { default as products } from './products'

const appReducer = combineReducers({
  categories,
  priceRange,
  products
})

const rootReducer = combineReducers({
  app: appReducer
})

export { rootReducer }
