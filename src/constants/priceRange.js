const actionTypes = {}

const actionConstants = [
  'SET_PRICE_RANGE',
  'SET_PRICE_RANGE_ERROR'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
