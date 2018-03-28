import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = ''

reducers[types.SET_SORT_ITEM] = (state = initState, action) => `sort=${action.payload.data}`

export default handleActions(reducers, initState)
