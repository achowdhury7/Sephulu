import types from '../constants/actionTypes'

const setPriceAscending = (data) => 
  ({
    type: types.SET_PRICE_ASCENDING
  })

const setPriceDescending = (data) => 
  ({
    type: types.SET_PRICE_DESCENDING
  })

export default {
  setPriceAscending,
  setPriceDescending
}