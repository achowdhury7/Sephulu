import { handleActions } from 'redux-actions'
import types from '../constants/actionTypes'

const reducers = {}
const initState = ''

reducers[types.SET_PRICE_ASCENDING] = (state = initState, action) => 'sort=price'

reducers[types.SET_PRICE_DESCENDING] = (state = initState, action) => 'sort=-price'

export default handleActions(reducers, initState)
