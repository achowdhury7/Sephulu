import { combineReducers } from 'redux'

import { default as categories } from './categories'
import { default as filters } from './filters'
import { default as priceRanges } from './priceRanges'
import { default as products } from './products'

const appReducer = combineReducers({
  categories,
  filters,
  priceRanges,
  products
})

const rootReducer = combineReducers({
  app: appReducer
})

export { rootReducer }
