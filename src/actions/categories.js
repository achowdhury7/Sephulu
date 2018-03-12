import types from '../constants/actionTypes'

const setCategories = (data) => 
  ({
    type: types.SET_CATEGORIES,
    payload: {
      data
    }
  })
  
export default {
  setCategories
}