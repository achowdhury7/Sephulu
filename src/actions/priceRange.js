import types from '../constants/actionTypes'

const setPriceRange = (data) => 
  ({
    type: types.SET_PRICE_RANGE,
    payload: {
      data
    }
  })

const setPriceRangeError = data => 
  ({
    type: types.SET_PRICE_RANGE_ERROR
  })

export default {
  setPriceRange
}