import { isFSA } from 'flux-standard-action'

import types from '../constants/actionTypes'
import { productActions } from '../actions'

const paramBuilder = (paramArray) => {
  let params = ''

  paramArray
    .map((param, i) => {
      if (param) {
        if (i > 0) {
          params += `&${param}`
        } else {
          params += param
        }
      } else {
        params += ''
      } 
    })

  return params
}

const setPriceAscending = ({ dispatch, getState, action }) => {
  const categoryFilterParams = getState().app.filters.categoryParams
  const priceRangeFilterParams = getState().app.filters.priceRangeParams
  const sortParam = 'sort=price'  
  const paramArray = [categoryFilterParams, priceRangeFilterParams, sortParam]
  
  dispatch(productActions.fetchProducts(paramBuilder(paramArray)))
}

const setPriceDescending = ({ dispatch, getState, action }) => {
  const categoryFilterParams = getState().app.filters.categoryParams
  const priceRangeFilterParams = getState().app.filters.priceRangeParams
  const sortParam = 'sort=-price'  
  const paramArray = [categoryFilterParams, priceRangeFilterParams, sortParam]
  
  dispatch(productActions.fetchProducts(paramBuilder(paramArray)))
}

const interceptors = {}
interceptors[types.SET_PRICE_ASCENDING] = setPriceAscending
interceptors[types.SET_PRICE_DESCENDING] = setPriceDescending

const middleware = ({ dispatch, getState }) =>
  (next) => (action) => {
    // Check whether the action follows Flux Standard Action
    if (isFSA(action) && interceptors[action.type]) {
      interceptors[action.type]({ dispatch, getState, action })
    }

    return next(action)
  }

export default middleware