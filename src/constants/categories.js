const actionTypes = {}

const actionConstants = [
  'SET_CATEGORIES'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
