const actionTypes = {}

const actionConstants = [
  'SET_PRICE_ASCENDING',
  'SET_PRICE_DESCENDING'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
