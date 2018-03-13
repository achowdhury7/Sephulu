import types from '../constants/actionTypes'
import get from '../utils/api'

const fetchProducts = (params, url) => 
  dispatch => 
    get(params, url)
      .then((response) => dispatch(setProducts(response.data)))
      .catch(() => dispatch(setProductsError()))

const setProducts = data => 
  ({
    type: types.SET_PRODUCTS,
    payload: {
      data
    }
  })

const setProductsError = data => 
  ({
    type: types.SET_PRODUCTS_ERROR
  })


const setProductsFetching = () => 
  ({
    type: types.SET_PRODUCTS_FETCHING
  })

const setProductsLoaded = () => 
  ({
    type: types.SET_PRODUCTS_LOADED
  })

const setProductSelected = data => 
  ({
    type: types.SET_PRODUCT_SELECTED,
    payload: {
      data
    }
  })
  
export default {
  fetchProducts,
  setProducts,
  setProductsFetching,
  setProductSelected,
  setProductsLoaded,
  setProductsError
}

