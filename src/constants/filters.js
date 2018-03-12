const actionTypes = {}

const actionConstants = [
  'SELECT_CATEGORY_FILTER',
  'DESELECT_CATEGORY_FILTER',
  'SELECT_PRICE_RANGE_FILTER',
  'DESELECT_PRICE_RANGE_FILTER',
  'SET_PAGE_SIZE_FILTER'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
