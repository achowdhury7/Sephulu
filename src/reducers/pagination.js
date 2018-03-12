import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = {}

reducers[types.SET_PAGINATION_LINKS] = (state = initState, action) =>
  Object.assign({}, state, action.payload.data )

export default handleActions(reducers, initState)
