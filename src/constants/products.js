const actionTypes = {}

const actionConstants = [
  'SET_PRODUCTS_FETCHING',
  'SET_PRODUCTS',
  'SET_PRODUCT_SELECTED',
  'SET_PRODUCTS_ERROR'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
