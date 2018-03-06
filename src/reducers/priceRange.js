import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = {}

reducers[types.SET_PRICE_RANGE] = (state = initState, action) => 
  Object.assign({}, state, action.payload.data )


reducers[types.SET_PRICE_RANGE_ERROR] = (state = initState) =>
  Object.assign({}, state, { error: true })

export default handleActions(reducers, initState)
