import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = {
  byId: {},
  allIds: [],
  isFetching: false,
  isLoaded: false
}

reducers[types.SET_PRODUCTS_FETCHING] = (state = initState) =>
  Object.assign({}, state, { isFetching: true })

reducers[types.SET_PRODUCT_SELECTED] = (state = initState, action) => {
  return Object.assign({}, state, { selected: action.payload.id })
} 

reducers[types.SET_PRODUCTS] = (state = initState, action) => {
  const data = action.payload.data.data
  const products = {}

  const allIds = data.map((product) => {
    products[product.id] = product.attributes
    return product.id
  })

  return Object.assign({}, state, { byId: products, allIds, isFetching: false })
}

reducers[types.SET_PRODUCTS_ERROR] = (state = initState) =>
  Object.assign({}, state, { isFetching: false, isLoaded: false, error: true })

export default handleActions(reducers, initState)