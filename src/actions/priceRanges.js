import types from '../constants/actionTypes'

const setPriceRanges = (data) => 
  ({
    type: types.SET_PRICE_RANGES,
    payload: {
      data
    }
  })

export default {
  setPriceRanges
}