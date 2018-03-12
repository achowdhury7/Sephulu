import types from '../constants/actionTypes'

const setPaginationLinks = (data) => 
  ({
    type: types.SET_PAGINATION_LINKS,
    payload: {
      data
    }
  })

export default {
  setPaginationLinks
}