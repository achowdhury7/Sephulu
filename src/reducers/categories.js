import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = []

reducers[types.SET_CATEGORIES] = (state = initState, action) => 
  Object.keys(action.payload.data).map(category => category)

reducers[types.SET_CATEGORIES_ERROR] = (state = initState) =>
  Object.assign({}, state, { error: true })

export default handleActions(reducers, initState)
