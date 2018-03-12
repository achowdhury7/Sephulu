import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = {
  selectedCategories: {},
  selectedPriceRanges: {}
}

reducers[types.SELECT_CATEGORY_FILTER] = (state = initState, action) => {
  const selectedCategories = state.selectedCategories
  selectedCategories[action.payload.data] = action.payload.data
  let paramString = '' 
  
  if (Object.keys(selectedCategories).length)
    paramString = `filter[category_in]=${Object.keys(selectedCategories).join(',')}`
  
  return Object.assign({}, state, { selectedCategories, categoryParams: paramString })
} 

reducers[types.DESELECT_CATEGORY_FILTER] = (state = initState, action) => {
  const selectedCategories = state.selectedCategories
  delete selectedCategories[action.payload.data]
  let paramString = '' 
  
  if (Object.keys(selectedCategories).length)
    paramString = `filter[category_in]=${Object.keys(selectedCategories).join(',')}`

  return Object.assign({}, state, { selectedCategories, categoryParams: paramString })
} 

reducers[types.SELECT_PRICE_RANGE_FILTER] = (state = initState, action) => {
  const selectedPriceRanges = state.selectedPriceRanges
  selectedPriceRanges[action.payload.data.min] = action.payload.data
  
  const paramString = Object.values(selectedPriceRanges)
    .map(range => `filter[price_gt]=${range.min}&filter[price_lt]=${range.max}`)
    .join('&')
  
  return Object.assign({}, state, { selectedPriceRanges, priceRangeParams: paramString })
} 

reducers[types.DESELECT_PRICE_RANGE_FILTER] = (state = initState, action) => {
  const selectedPriceRanges = state.selectedPriceRanges
  delete selectedPriceRanges[action.payload.data.min]
  const paramString = Object.values(selectedPriceRanges)
    .map(range => `filter[price_gt]=${range.min}&filter[price_lt]=${range.max}`)
    .join('&')

  return Object.assign({}, state, { selectedPriceRanges, priceRangeParams: paramString })
}

reducers[types.SET_PAGE_SIZE_FILTER] = (state = initState, action) => 
  Object.assign({}, state, { pageSizeParam: `page[size]=${action.payload.data}` })


export default handleActions(reducers, initState)
