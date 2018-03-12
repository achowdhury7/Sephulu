const actionTypes = {}

const actionConstants = [
  'SET_PRICE_RANGES'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
