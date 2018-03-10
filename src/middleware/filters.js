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

const selectCategoryFilter = ({ dispatch, getState, action }) => {
  const categoryFilterParams = getState().app.filters.categoryParams
  const priceRangeFilterParams = getState().app.filters.priceRangeParams
  const sortParam = getState().app.sort  
  const selectedCategory = action.payload.data
  
  const categoryParams = (categoryFilterParams && categoryFilterParams.length) ?
    `${categoryFilterParams},${selectedCategory}` :
    `filter[category_in]=${selectedCategory}`

  const paramArray = [categoryParams, priceRangeFilterParams, sortParam]

  dispatch(productActions.fetchProducts(paramBuilder(paramArray)))
}

const deselectCategoryFilter = ({ dispatch, getState, action }) => {
  const priceRangeFilterParams = getState().app.filters.priceRangeParams
  const sortParam = getState().app.sort
  const selectedCategory = action.payload.data

  const categories = this.props.filters.selectedCategories
  delete categories[selectedCategory]
  const categoryKeys = Object.keys(categories)

  const categoryParams = categoryKeys.length ? `filter[category_in]=${categoryKeys.join(',')}` : ''

  const paramArray = [categoryParams, priceRangeFilterParams, sortParam]

  dispatch(productActions.fetchProducts(paramBuilder(paramArray)))
}

const selectPriceRangeFilter = ({ dispatch, getState, action }) => {
  const categoryFilterParams = getState().app.filters.categoryParams
  const priceRangeFilterParams = getState().app.filters.priceRangeParams
  const sortParam = getState().app.sort  
  const selectedPriceRange = action.payload.data
  
  const priceRangeParams = (priceRangeFilterParams && priceRangeFilterParams.length) ?
    `${priceRangeFilterParams}&filter[price_lt]=${selectedPriceRange.max}&filter[price_gt]=${selectedPriceRange.min}` :
    `filter[price_lt]=${selectedPriceRange.max}&filter[price_gt]=${selectedPriceRange.min}`

  const paramArray = [categoryFilterParams, priceRangeParams, sortParam]

  dispatch(productActions.fetchProducts(paramBuilder(paramArray)))
}

const deselectPriceRangeFilter = ({ dispatch, getState, action }) => {
  const categoryFilterParams = getState().app.filters.categoryParams
  const priceRangeFilterParams = getState().app.filters.priceRangeParams
  const sortParam = getState().app.sort  
  const selectedPriceRange = action.payload.data
  
  const priceRangeParams = (priceRangeFilterParams && priceRangeFilterParams.length) ?
    `${priceRangeFilterParams}&filter[price_lt]=${selectedPriceRange.max}&filter[price_gt]=${selectedPriceRange.min}` :
    `filter[price_lt]=${selectedPriceRange.max}&filter[price_gt]=${selectedPriceRange.min}`

  const paramArray = [categoryFilterParams, priceRangeParams, sortParam]

  dispatch(productActions.fetchProducts(paramBuilder(paramArray)))
}



const interceptors = {}
interceptors[types.SELECT_CATEGORY_FILTER] = selectCategoryFilter
interceptors[types.DESELECT_CATEGORY_FILTER] = deselectCategoryFilter
interceptors[types.SELECT_PRICE_RANGE_FILTER] = selectPriceRangeFilter
interceptors[types.DESELECT_PRICE_RANGE_FILTER] = deselectPriceRangeFilter

const middleware = ({ dispatch, getState }) =>
  (next) => (action) => {
    // Check whether the action follows Flux Standard Action
    if (isFSA(action) && interceptors[action.type]) {
      interceptors[action.type]({ dispatch, getState, action })
    }

    return next(action)
  }

export default middleware