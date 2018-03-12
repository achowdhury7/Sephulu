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

const selectPriceRangeFilter = (data) => 
  ({
    type: types.SELECT_PRICE_RANGE_FILTER,
    payload: {
      data
    }
  })

const deselectPriceRangeFilter = (data) => 
  ({
    type: types.DESELECT_PRICE_RANGE_FILTER,
    payload: {
      data
    }
  })

const setPageSizeFilter = (data) => 
  ({
    type: types.SET_PAGE_SIZE_FILTER,
    payload: {
      data
    }
  })

export default {
  selectCategoryFilter,
  deselectCategoryFilter,
  selectPriceRangeFilter,
  deselectPriceRangeFilter,
  setPageSizeFilter
}