import types from '../constants/actionTypes'

const setSortItem = (data) => 
	({
		type: types.SET_SORT_PARAM,
		payload: {
			data
		}	
	})

export default {
  setSortItem
}
