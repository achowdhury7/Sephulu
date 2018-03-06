const actionTypes = {}

const actionConstants = [
  'SET_CATEGORIES',
  'SET_CATEGORIES_ERROR'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
