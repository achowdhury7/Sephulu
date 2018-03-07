import { isFSA } from 'flux-standard-action'

import types from '../constants/actionTypes'
import { categoryActions, priceRangesActions } from '../actions'

const setProducts = ({ dispatch, getState, action }) => {
  const products = action.payload.data.data
  const categories = {}
  const ranges = []
  let maxPrice = 0
  
  const prices = products.map((product, i) => {
    // create a hash of categories
    categories[product.attributes.category] = product.attributes.category
    
    if (maxPrice < product.attributes.price) {
      // extract the highest value of price from the product array
      maxPrice = product.attributes.price
    }
  })

  const rangeSize = Math.round(maxPrice/4)
  
  // create price ranges
  for (let i = 0; i < 3; i++) {
    ranges.push({
      max: maxPrice, min: maxPrice - rangeSize
    })

    maxPrice -= rangeSize
  }

  ranges.push({
    max: maxPrice, min: 0
  })

  // const range = {
  //   minPrice: 0,
  //   maxPrice
  // }

  dispatch(categoryActions.setCategories(categories))
  dispatch(priceRangesActions.setPriceRanges(ranges))
}

const interceptors = {}
interceptors[types.SET_PRODUCTS] = setProducts

const middleware = ({ dispatch, getState }) =>
  (next) => (action) => {
    // Check whether the action follows Flux Standard Action
    if (isFSA(action) && interceptors[action.type]) {
      interceptors[action.type]({ dispatch, getState, action })
    }

    return next(action)
  }

export default middleware