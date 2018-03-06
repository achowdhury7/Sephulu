import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = {
  categories: [],
  priceRange: {
    min: 0,
    max: 10000
  }
}

reducers[types.SET_CATEGORY_FILTER] = (state = initState, action) => 
  Object.assign({}, state, { categories: action.payload.data })

reducers[types.SET_PRICE_RANGE_FILTER] = (state = initState, action) => 
  Object.assign({}, state, { priceRange: action.payload.data })

export default handleActions(reducers, initState)
