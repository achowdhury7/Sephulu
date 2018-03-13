import axios from 'axios'

const base = process.env.API_BASE_URL
const path = '/products'

const get = (params, url) => {
  let urlString = ''

  if (params && !url) {
    urlString = `${path}?${params}`
  } else if (!params && !url) {
    urlString = path
  }
  
  return axios({
    baseURL: url ? url : base,
    url: urlString,
    method: 'get',
    credentials: 'same-origin'
  })
}

export default get
