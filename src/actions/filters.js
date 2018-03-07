import types from '../constants/actionTypes'

const selectCategoryFilter = (data) => 
  ({
    type: types.SELECT_CATEGORY_FILTER,
    payload: {
      data
    }
  })

const deselectCategoryFilter = (data) => 
  ({
    type: types.DESELECT_CATEGORY_FILTER,
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
  selectCategoryFilter,
  deselectCategoryFilter,
  setPriceRangeFilter
}