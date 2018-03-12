const actionTypes = {}

const actionConstants = [
  'SET_PAGINATION_LINKS'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
