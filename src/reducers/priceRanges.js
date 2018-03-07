import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = []

reducers[types.SET_PRICE_RANGES] = (state = initState, action) => 
  Object.keys(action.payload.data ).map(key => action.payload.data[key]).sort((a, b) => a.min - b.min)

export default handleActions(reducers, initState)
