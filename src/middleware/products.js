import { isFSA } from 'flux-standard-action'

import types from '../constants/actionTypes'
import { paginationActions } from '../actions'

const setPaginationLinks = ({ dispatch, getState, action }) => {
  dispatch(paginationActions.setPaginationLinks(action.payload.data.links))
}

const interceptors = {}
interceptors[types.SET_PRODUCTS] = setPaginationLinks

const middleware = ({ dispatch, getState }) =>
  (next) => (action) => {
    // Check whether the action follows Flux Standard Action
    if (isFSA(action) && interceptors[action.type]) {
      interceptors[action.type]({ dispatch, getState, action })
    }

    return next(action)
  }

export default middleware