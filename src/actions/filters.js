import types from '../constants/actionTypes'

const setCategoryFilter = (data) => 
  ({
    type: types.SET_CATEGORY_FILTER,
    payload: {
      data
    }
  })

const setPriceRangeFilter = (data) => 
  ({
    type: types.SET_PRICE_RANGE_FILTER,
    payload: {
      data
    }
  })

export default {
  setCategoryFilter,
  setPriceRangeFilter
}