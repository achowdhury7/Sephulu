import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = []

reducers[types.SET_PRICE_RANGES] = (state = initState, action) => action.payload.data

export default handleActions(reducers, initState)
