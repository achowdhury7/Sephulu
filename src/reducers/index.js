import { combineReducers } from 'redux'

import { default as categories } from './categories'
import { default as filters } from './filters'
import { default as paginationLinks } from './pagination'
import { default as priceRanges } from './priceRanges'
import { default as products } from './products'
import { default as sort } from './sort'

const appReducer = combineReducers({
  categories,
  filters,
  paginationLinks, 
  priceRanges,
  products,
  sort
})

const rootReducer = combineReducers({
  app: appReducer
})

export { rootReducer }
