const actionTypes = {}

const actionConstants = [
  'SET_SORT_ITEM'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
