const actionTypes = {}

const actionConstants = [
  'SET_CATEGORY_FILTER',
  'SET_PRICE_RANGE_FILTER'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
