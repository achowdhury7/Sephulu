import types from '../constants/actionTypes'

const setCategories = (data) => 
  ({
    type: types.SET_CATEGORIES,
    payload: {
      data
    }
  })


const setCategoriesError = data => 
  ({
    type: types.SET_CATEGORIES_ERROR
  })

export default {
  setCategories
}