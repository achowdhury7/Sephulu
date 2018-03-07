import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = {
  categories: {},
  priceRange: {
    min: 0,
    max: 10000
  }
}

reducers[types.SELECT_CATEGORY_FILTER] = (state = initState, action) => {
  const categories = state.categories
  categories[action.payload.data] = action.payload.data
  
  return Object.assign({}, state, { categories })
} 

reducers[types.DESELECT_CATEGORY_FILTER] = (state = initState, action) => {
  const categories = state.categories
  delete categories[action.payload.data]

  return Object.assign({}, state, { categories })
} 

reducers[types.SET_PRICE_RANGE_FILTER] = (state = initState, action) => 
  Object.assign({}, state, { priceRange: action.payload.data })

export default handleActions(reducers, initState)
